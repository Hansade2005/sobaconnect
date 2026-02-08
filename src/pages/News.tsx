import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '../lib/api';

interface BlogPost {
  id?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  featured_image_url?: string;
  published_date?: string;
  category?: string;
}

const News: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getBlogPosts();
        if (Array.isArray(data)) setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
          <p className="text-xl text-gray-300">Latest stories and announcements from SOBA Calgary</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading news...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post, index) => (
                <div key={index} className="card overflow-hidden group cursor-pointer" onClick={() => setSelectedPost(post)}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {post.featured_image_url && (
                      <div className="md:col-span-1">
                        <img src={post.featured_image_url} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
                      </div>
                    )}
                    <div className={post.featured_image_url ? 'md:col-span-2' : 'col-span-full'}>
                      {post.category && (
                        <p className="text-xs text-red-600 font-semibold mb-2 uppercase">{post.category}</p>
                      )}
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        {post.published_date && (
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {post.published_date}
                          </div>
                        )}
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <User size={16} />
                            {post.author}
                          </div>
                        )}
                      </div>
                      <button className="text-red-600 hover:text-red-500 font-semibold flex items-center gap-2 transition-colors">
                        Read Full Story <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No news available at the moment.</p>
              <p className="text-gray-500 mt-2">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 rounded-xl max-w-2xl w-full my-8 border border-gray-800 p-8 relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            {selectedPost.featured_image_url && (
              <img src={selectedPost.featured_image_url} alt={selectedPost.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            )}
            {selectedPost.category && (
              <p className="text-xs text-red-600 font-semibold mb-2 uppercase">{selectedPost.category}</p>
            )}
            <h2 className="text-3xl font-bold text-white mb-4">{selectedPost.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-700">
              {selectedPost.published_date && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {selectedPost.published_date}
                </div>
              )}
              {selectedPost.author && (
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {selectedPost.author}
                </div>
              )}
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-wrap">{selectedPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
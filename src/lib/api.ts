import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_PIPILOT_API_KEY ? 'https://api.pipilot.dev/v1' : '';
const API_KEY = import.meta.env.VITE_PIPILOT_API_KEY || '';
const DATABASE_ID = import.meta.env.VITE_PIPILOT_DATABASE_ID || '107';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Table IDs from database
export const TABLE_IDS = {
  USERS: '507',
  MEMBERS: '511',
  DONATIONS: '508',
  EVENTS: '512',
  EVENT_REGISTRATIONS: '509',
  BLOG_POSTS: '513',
  NEWSLETTERS: '510',
};

// Newsletter subscription
export const subscribeNewsletter = async (email: string, fullName?: string) => {
  try {
    const response = await api.post(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.NEWSLETTERS}/records`, {
      email,
      full_name: fullName || '',
      subscription_status: 'active',
    });
    return response.data;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
};

// Get all upcoming events
export const getUpcomingEvents = async () => {
  try {
    const response = await api.get(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.EVENTS}/records?where=status:upcoming`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

// Get all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await api.get(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.BLOG_POSTS}/records?where=status:published`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Register for event
export const registerForEvent = async (eventId: string, attendeeName: string, attendeeEmail: string) => {
  try {
    const response = await api.post(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.EVENT_REGISTRATIONS}/records`, {
      event_id: eventId,
      attendee_name: attendeeName,
      attendee_email: attendeeEmail,
      attendance_status: 'registered',
    });
    return response.data;
  } catch (error) {
    console.error('Event registration error:', error);
    throw error;
  }
};

// Submit donation
export const submitDonation = async (donorName: string, donorEmail: string, amount: number, donationType: string) => {
  try {
    const response = await api.post(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.DONATIONS}/records`, {
      donor_name: donorName,
      donor_email: donorEmail,
      amount_cad: amount,
      donation_type: donationType,
      payment_status: 'pending',
    });
    return response.data;
  } catch (error) {
    console.error('Donation submission error:', error);
    throw error;
  }
};

// Register member
export const registerMember = async (memberData: {
  full_name: string;
  email: string;
  phone?: string;
  address?: string;
  sasse_graduation_year?: number;
}) => {
  try {
    const response = await api.post(`/databases/${DATABASE_ID}/tables/${TABLE_IDS.MEMBERS}/records`, {
      ...memberData,
      user_id: 'temp-user-id',
      membership_status: 'active',
      membership_fee_paid: false,
      registration_date: new Date().toISOString().split('T')[0],
    });
    return response.data;
  } catch (error) {
    console.error('Member registration error:', error);
    throw error;
  }
};

export default api;

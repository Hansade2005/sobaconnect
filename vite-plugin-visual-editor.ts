// Visual Editor Vite Plugin
// Adds source file info (data-ve-id, data-ve-file, data-ve-line) to JSX elements
// This enables the visual editor to map DOM elements back to source code

import { Plugin } from 'vite';
import * as babel from '@babel/core';
import * as t from '@babel/types';

export function visualEditorPlugin(): Plugin {
  return {
    name: 'vite-visual-editor',
    enforce: 'pre',
    transform(code: string, id: string) {
      // Only process JSX/TSX files in src directory
      if (!id.match(/\/src\/.*\.[jt]sx?$/)) return null;
      if (id.includes('node_modules')) return null;

      try {
        const result = babel.transformSync(code, {
          filename: id,
          presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
          plugins: [
            function visualEditorBabelPlugin() {
              let elementIndex = 0;
              
              return {
                visitor: {
                  JSXOpeningElement(path: any) {
                    const { node } = path;
                    const loc = node.loc;
                    
                    if (!loc) return;
                    
                    // Skip if already has data-ve-id
                    const hasVeId = node.attributes.some(
                      (attr: any) => attr.type === 'JSXAttribute' && 
                        attr.name?.name === 'data-ve-id'
                    );
                    if (hasVeId) return;
                    
                    // Create relative path from project root
                    const relativePath = id.replace(/^.*\/src\//, 'src/');
                    
                    // Add data-ve-id attribute (unique identifier)
                    const idAttr = t.jsxAttribute(
                      t.jsxIdentifier('data-ve-id'),
                      t.stringLiteral(`${relativePath}:${loc.start.line}:${elementIndex++}`)
                    );
                    
                    // Add data-ve-file attribute (source file path)
                    const fileAttr = t.jsxAttribute(
                      t.jsxIdentifier('data-ve-file'),
                      t.stringLiteral(relativePath)
                    );
                    
                    // Add data-ve-line attribute (line number)
                    const lineAttr = t.jsxAttribute(
                      t.jsxIdentifier('data-ve-line'),
                      t.stringLiteral(String(loc.start.line))
                    );
                    
                    node.attributes.push(idAttr, fileAttr, lineAttr);
                  },
                },
              };
            },
          ],
          sourceMaps: true,
        });

        if (result && result.code) {
          return {
            code: result.code,
            map: result.map,
          };
        }
      } catch (error) {
        // Silently fail - visual editor source mapping is optional
        // console.warn('[Visual Editor Plugin] Transform error:', error);
      }

      return null;
    },
  };
}

export default visualEditorPlugin;

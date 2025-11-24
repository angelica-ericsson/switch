import { preload } from 'react-dom';
import type { UnionNodeType } from './zod-schema';

import startScreenImagePath from '@/assets/pexels-tomfisk-13777960.jpg';
import { fakeData } from './constants';

/**
 * Queues all images that are used in the game for Pre-loading
 */
export function preloadImages(nodes: Map<string, UnionNodeType>): void {
  for (const node of nodes.values()) {
    if (node.type === 'newsFlash') {
      if (node.data.imageUrl) preload(node.data.imageUrl, { as: 'image', fetchPriority: 'low' });
    }
  }

  for (const entry of fakeData) {
    preload(entry.picture, { as: 'image', fetchPriority: 'low' });
  }

  preload(startScreenImagePath, { as: 'image', fetchPriority: 'low' });
}

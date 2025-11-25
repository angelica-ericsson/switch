import { preload } from 'react-dom';
import type { UnionNodeType } from './zod-schema';

import startScreenImagePath from '@/assets/pexels-tomfisk-13777960.jpg';
import { fakeData } from './constants';

const preloadedUrls = new Set<string>();
function loadUrl(url: string) {
  if (preloadedUrls.has(url)) return;
  preload(url, { as: 'image', fetchPriority: 'high' });
  preloadedUrls.add(url);
}

export function preloadImages(node: UnionNodeType): void {
  if (node.type === 'newsFlash') {
    if (node.data.imageUrl) loadUrl(node.data.imageUrl);
  }

  if (node.type === 'social') {
    [node.data.userName1, node.data.userName2, node.data.userName3]
      .filter((username): username is string => !!username)
      .forEach((username) => {
        const profile = fakeData.find((fake) => fake.userName === username);
        if (profile) loadUrl(profile.picture);
      });
  }
  if (node.type === 'start') {
    loadUrl(startScreenImagePath);
  }
}

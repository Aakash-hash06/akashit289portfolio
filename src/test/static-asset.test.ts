import { describe, expect, it } from 'vitest';
import { assetUrl } from '../lib/static-asset';

describe('GitHub Pages asset paths', () => {
  it('keeps portfolio assets under the repository base path', () => {
    expect(assetUrl('/aakash-s-dev-showcase/', 'resume.pdf'))
      .toBe('/aakash-s-dev-showcase/assets/resume.pdf');
  });

  it('normalizes a base path without a trailing slash', () => {
    expect(assetUrl('/aakash-s-dev-showcase', '/portrait.jpeg'))
      .toBe('/aakash-s-dev-showcase/assets/portrait.jpeg');
  });
});
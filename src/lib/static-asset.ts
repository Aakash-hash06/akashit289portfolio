export function assetUrl(baseUrl: string, filename: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const file = filename.replace(/^\/+/, '');
  return `${base}assets/${file}`;
}

export const staticAsset = (filename: string): string =>
  assetUrl(import.meta.env.BASE_URL, filename);
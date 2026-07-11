// Static export config — works for Vercel (root domain) and GitHub Pages (project subpath).
//
// - Deploying to Vercel: no changes needed, leave NEXT_BASE_PATH unset.
// - Deploying to GitHub Pages as a project site (https://user.github.io/repo-name/):
//   set NEXT_BASE_PATH=/repo-name before `next build` (the included GitHub Actions
//   workflow at .github/workflows/deploy-gh-pages.yml already does this for you).

const basePath = process.env.NEXT_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;

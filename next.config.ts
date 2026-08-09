import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'graph.facebook.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  webpack: (config, {dev, webpack}) => {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /next[\\\/]dist[\\\/](esm[\\\/])?build[\\\/]polyfills[\\\/]polyfill-nomodule\.js/,
      require("path").resolve(__dirname, "lib/empty.js")
    ));
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /next[\\\/]dist[\\\/](esm[\\\/])?build[\\\/]polyfills[\\\/]fetch[\\\/]whatwg-fetch\.js/,
      require("path").resolve(__dirname, "lib/empty.js")
    ));

    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    
    return config;
  },
};

export default nextConfig;

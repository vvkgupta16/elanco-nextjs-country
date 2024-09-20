/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
          port: '',
          pathname: '/w320/**', 
        },
      ],
    },
    compiler: {
      styledComponents: true,
    },
  };
  
  export default nextConfig;
  
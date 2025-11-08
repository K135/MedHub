/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/event',
        destination: '/courses?course-format=In-Person',
        permanent: false,
      },
      {
        source: '/event-details',
        destination: '/courses-details',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

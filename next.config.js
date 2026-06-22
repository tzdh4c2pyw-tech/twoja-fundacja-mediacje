/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "twoja-fundacja-mediacje.vercel.app",
          },
        ],
        destination: "https://mediacje.twojafundacja.pl/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

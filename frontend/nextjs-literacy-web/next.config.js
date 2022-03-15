/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/kakaoAuth",
        destination: process.env.KAKAO_AUTH_URL,
      },
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true,
            }
          },
          {
            loader: "sass-loader"
          },
        ],
      },
    ],
  },
  
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  async rewrites() {

    return [
      {
        source: "/api/kakaoAuth",
        destination: process.env.KAKAO_AUTH_URL,
      },
      {
        source: "/api/searchWord/:q",
        destination: `https://opendict.korean.go.kr/api/search?key=${process.env.OPENDICT_API_KEY}&q=:q&num=20&sort=dict&req_type=json&advanced=y&method=include`,
      }
    ]
  }
}

module.exports = nextConfig

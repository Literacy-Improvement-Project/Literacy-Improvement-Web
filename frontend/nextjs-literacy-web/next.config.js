/** @type {import('next').NextConfig} */

const KO_API_KEY = "82B3B296BF46EF6BD48B53CB022A5C00";
const Q = encodeURI("나무");
const REQ_TYPE = "json";


const URL = `https://opendict.korean.go.kr/api/search?certkey_no=3723&key=82B3B296BF46EF6BD48B53CB022A5C00&target_type=search&req_type=json&part=word&q=%EB%82%98%EB%AC%B4&sort=dict&start=1&num=10`

const nextConfig = {
  reactStrictMode: true,
  
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    
    return [
      {
        source: "/api/kakaoAuth",
        destination: process.env.KAKAO_AUTH_URL,
      },
      {
        source: "/api/searchWord",
        destination: `https://opendict.korean.go.kr/api/search?certkey_no=3723&key=${KO_API_KEY}&target_type=search&req_type=json&part=word&q=%EB%82%98%EB%AC%B4&sort=dict&start=1&num=10`,
      }
    ]
  }
}

module.exports = nextConfig

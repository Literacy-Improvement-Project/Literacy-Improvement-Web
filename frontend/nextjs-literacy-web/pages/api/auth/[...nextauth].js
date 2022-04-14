// import NextAuth from "next-auth"
// import KakaoProvider from "next-auth/providers/kakao";


// export default async function auth(req, res) {
//   // Do whatever you want here, before the request is passed down to `NextAuth`
//   const providers = [
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID,
//       clientSecret: process.env.KAKAO_CLIENT_SECRET,
//       authorization: {
//         url: "https://kauth.kakao.com/oauth/authorize",
//         params: { 
//           scope: undefined,
//         },
//       },
//       token: {
//         url: 'https://kauth.kakao.com/oauth/token',
//         request: async ({ provider, params, checks, client }) => {
//           const exchangeBody = {
//             client_id: provider.clientId,
//             client_secret: provider.clientSecret,
//           };
//           return {
//             tokens: await client.oauthCallback(
//               provider.callbackUrl,
//               params,
//               checks,
//               { exchangeBody },
//             ),
//           };
//         },
//       },
//       checks: ['state'],
//     }),
//   ]


//   return await NextAuth(req, res, {
//     providers,
//   })
// }
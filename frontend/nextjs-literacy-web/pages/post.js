// pages/posts.js
import { dehydrate, QueryClient, useQuery } from "react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Posts() {
  const { data } = useQuery('posts', getPosts)

  const { data: otherData } = useQuery('posts-2', getPosts)
}


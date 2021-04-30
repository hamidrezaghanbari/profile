import Hero from './../components/hero/hero'
import FeaturedPosts from './../components/featured-posts/featured-posts'
import { getFeaturedPosts } from '../lib/posts.util'

const IndexPage = ({ featuredPosts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts } />
    </>
  )
}

export const getStaticProps = async (ctx) => {

  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      featuredPosts
    },
    revalidate: 86400 // 86400 seconds is one day for refresh this and revalidate to get featured posts again
  }
}

export default IndexPage

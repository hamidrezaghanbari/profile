import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts.util"

const Posts = ({ posts }) => {
    return (
        <AllPosts posts={posts} />
    )
}

export const getStaticProps = async (ctx) => {
    const posts = getAllPosts()

    return {
        props: {
            posts
        },
        revalidate: 600 // 10 minutes
    }
}

export default Posts

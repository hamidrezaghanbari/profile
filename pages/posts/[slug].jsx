import { getPostData, getPostsFiles } from '../../lib/posts.util'
import PostContent from './../../components/posts/post-detail/post-content'

const SinglePost = ({post}) => {
    return <PostContent post={post} />
}

export const getStaticProps = async (ctx) => {
    const { params: { slug } } = ctx

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
    const postsFiles = getPostsFiles()
    const slugs = postsFiles.map(postFile => postFile.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default SinglePost

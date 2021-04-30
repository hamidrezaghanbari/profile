import PostsGrid from './posts-grid'
import classes from './all-posts.module.css'

const AllPosts = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default AllPosts

import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

const PostItem = ({ post: { title, slug, date, image, excerpt } }) => {

    const formattedDate = new Date(date).toLocaleDateString('fa-ir', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
    const postLink = `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={postLink}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300} height={200}
                            layout="responsive" />
                    </div>

                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem

import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const PostContent = ({ post }) => {

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const components = {
        p({ children }) {
            if (children[0].type === 'img') {
                const image = children[0]
                const imagePath = `/images/posts/${post.slug}/${image.props.src}`

                return <div className={classes.image}>
                    <Image src={imagePath} alt={image.props.alt}
                        width={600} height={300} />
                </div>
            }

            return <p>{children}</p>
        },
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return <SyntaxHighlighter language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
            // {...props}
            />
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={components} children={post.content} />
        </article>
    )
}

export default PostContent

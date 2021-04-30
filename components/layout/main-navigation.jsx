import Link from 'next/link'
import classes from './main-navigation.module.css'
import Logo from './logo'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact-me">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation

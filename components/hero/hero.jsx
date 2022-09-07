import classes from './hero.module.css';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/hamid.jpg"
                alt="Hamidreza Ghanbari"
                width={300} height={300} />
            </div>
            <h1>Hi i'm Hamidreza Ghanbari</h1>
            <p>this is my blog and resume website that i describe my self.</p>
        </section>
    )
}

export default Hero

import { ImageBack, ImageWrapper, InfoSecWrapper, Job, LineBreak, Name, NavItem, NavSec, SocialItem, SocialSec } from "../widgets/forall/info-sec.widgets"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next"

const InfoSec = () => {
    const router = useRouter()

    const { t } = useTranslation('common')

    return (
        <InfoSecWrapper>
            <ImageWrapper>
                <ImageBack>
                    <Image layout="fill" src="/images/hamid.png" alt="hamidreza ghanbari" />
                </ImageBack>
            </ImageWrapper>

            <Name>
                {/* Hamidreza ghanbari */}
                {t('name')}
            </Name>
            <Job>
                Frontend(nextjs and react) developer
            </Job>

            <LineBreak />

            <NavSec>
                <Link href="/" locale={router.locale}>
                    <NavItem active={router.asPath === '/'}>
                        {/* <NavItem> */}
                        {t('menu_1')}
                    </NavItem>
                </Link>
                <Link href="/my-projects" locale={router.locale}>
                    <NavItem active={router.asPath === '/my-projects'}>
                        {/* <NavItem> */}
                        {t('menu_2')}
                    </NavItem>
                </Link>
                <Link href="/contact-me" locale={router.locale}>
                    <NavItem active={router.asPath === '/contact-me'}>
                        {/* <NavItem> */}
                        {t('menu_3')}
                    </NavItem>
                </Link>
            </NavSec>

            <LineBreak />

            <SocialSec>
                <SocialItem>
                    <Image src="/images/email-icon.svg" alt="hamidreza ghanbari email" width={24} height={24} />
                    <span>hamidrezaghanbari13@gmail.com</span>
                </SocialItem>
                <SocialItem>
                    <Image src="/images/whatsapp.svg" alt="hamidreza ghanbari whatsapp" width={24} height={24} />
                    <span>+98-9385784855</span>
                </SocialItem>
                <SocialItem>
                    <Image src="/images/github-octocat.svg" alt="hamidreza ghanbari github" width={24} height={24} />
                    <Link href="http://github.com/hamidrezaghanbari">
                        <a>@hamidrezaghanbari</a>
                    </Link>
                </SocialItem>
                <SocialItem>
                    <Image src="/images/figma.svg" alt="hamidreza ghanbari figma" width={24} height={24} />
                    <Link href="http://figma.com/@hamidghanbari">
                        <a>@hamidghanbari</a>
                    </Link>
                </SocialItem>
            </SocialSec>

        </InfoSecWrapper>
    )
}

export default InfoSec

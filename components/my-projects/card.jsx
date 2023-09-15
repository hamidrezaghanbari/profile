import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { useState } from 'react'
import { getMonth } from '../../lib/utils/helper.func'
import { Btn, CardBody, CardBtns, CardDate, CardDesc, CardFeatures, CardImg, CardName, CardTitle, CardWrapper, Feature } from '../widgets/my-projects/my-projects.widgets'

const Card = ({ src, alt, name, date_fa, date_en, desc_fa, desc_en, features, links }) => {
    const router = useRouter()

    const [isImageReady, setIsImageReady] = useState(false);

    const onLoadCallBack = (e) => {
        setIsImageReady(true)
    }

    return (
        <CardWrapper>
            <CardImg className={`${!isImageReady ? 'skeleton-box' : ''}`}>
                <Image onLoad={onLoadCallBack} layout="fill" src={src} alt={alt} />
            </CardImg>
            <CardBody>
                <CardTitle>
                    <CardName>{name}</CardName>
                    {
                        router.locale === 'en' ? (
                            <CardDate>{typeof date_en === 'string' ? date_en : `${date_en[0]}-${getMonth(date_en[1])} to ${getMonth(date_en[2])}`}</CardDate>
                        ) : (
                            <CardDate>{typeof date_fa === 'string' ? date_fa : `${date_fa[0]}-${getMonth(date_fa[1])} to ${getMonth(date_fa[2])}`}</CardDate>
                        )
                    }
                </CardTitle>
                <CardDesc>
                    {
                        router.locale === 'en' ? desc_en : desc_fa
                    }
                </CardDesc>
                <CardFeatures>
                    <span>Created by:</span>

                    {
                        features.map((feature, index) => <Feature key={index}>{feature}</Feature>)
                    }
                </CardFeatures>
                <CardBtns>

                    {
                        links.map(({ name_en, name_fa, withIcon, isActive, href }) => {
                            return (
                                <Btn active={isActive}>
                                    <a target="_blank" href={href}>
                                        {
                                            router.locale === 'en' ? <span>{name_en}</span> : <span>{name_fa}</span>
                                        }
                                        {withIcon && <Image src="/images/link.svg" alt={`link to ${name}`} width={15} height={15} />}
                                    </a>
                                </Btn>
                            )
                        })
                    }
                </CardBtns>
            </CardBody>
        </CardWrapper>
    )
}

export default Card

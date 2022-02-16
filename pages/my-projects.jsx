import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Card from "../components/my-projects/card"
import { BodySecWrapper, Breaker, Cards, Title } from "../components/widgets/forall/body-sec.widgets"
import Data from '../public/data/projects.json'

const MyProjects = () => {
    const { t } = useTranslation('common')

    
    
    return (
        <BodySecWrapper>
            <Title>
                <h1>{t('my_projects')}</h1>
                <Breaker />
            </Title>

            <Cards>
                {
                    Data.projects.map(({ id, src, alt, name, date_en, date_fa, desc_en, desc_fa, features, links }) => {
                        return (
                            <Card
                                key={id}
                                src={src} alt={alt} name={name}
                                date_en={date_en} date_fa={date_fa}
                                desc_en={desc_en} desc_fa={desc_fa}
                                features={features} links={links}
                            />
                        )
                    })
                }
            </Cards>

        </BodySecWrapper>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common'])
    },
})


export default MyProjects

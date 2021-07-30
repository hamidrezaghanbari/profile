// import { getFeaturedPosts } from '../lib/posts.util'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BodyDesc, BodySecWrapper, Breaker, Skill, Skills, Title } from "../components/widgets/forall/body-sec.widgets"

const IndexPage = () => {
  const { t } = useTranslation()

 

  return (
 
    <BodySecWrapper>
      <Title>
        <h1>{t('index_title_1')}</h1>
        <Breaker />
      </Title>
      <BodyDesc>
        <p>
          {t('index_body_1')}
        </p>
      </BodyDesc>
      <Title>
        <h1>{t('index_title_2')}</h1>
        <Breaker />
      </Title>
      <BodyDesc>
        <div>
          <ul>
            
            {
              t('index_body_2').split(',').map((experience, index) => {
                return <li key={index}>{experience}</li>
              })
            }


          </ul>
        </div>
      </BodyDesc>
      <Title>
        <h1>{t('index_title_3')}</h1>
        <Breaker />
      </Title>
      <Skills>

        {
          t('index_body_3').split(',').map((skill, index) => {
            return <Skill key={index}>{skill}</Skill>
          })
        }    

      </Skills>
    </BodySecWrapper>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  },
})




// export const getStaticProps = async (ctx) => {

//   const featuredPosts = getFeaturedPosts()

//   return {
//     props: {
//       featuredPosts
//     },
//     revalidate: 86400 // 86400 seconds is one day for refresh this and revalidate to get featured posts again
//   }
// }

export default IndexPage

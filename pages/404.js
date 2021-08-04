// import { getFeaturedPosts } from '../lib/posts.util'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {  BodySecWrapper } from "../components/widgets/forall/body-sec.widgets"

const PageNotFound = () => {
  const { t } = useTranslation('common')

  return (
 
    <BodySecWrapper>
      <h2>404 {t('lang') === 'en' ? 'page not found': 'صفحه ای یافت نشد'}</h2>
    </BodySecWrapper>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  },
})



export default PageNotFound

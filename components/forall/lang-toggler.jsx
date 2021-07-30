import { ChangeLang, Lang } from '../widgets/forall/index.widgets'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LangToggler = () => {
  const router = useRouter()

  const { t } = useTranslation('common')

  return (
    <ChangeLang lang={t('lang')}>
      <Link href={`${router.asPath}`} locale="en">
        <Lang font="en"  active={t('lang') === 'en' ? true : false}>
          en
        </Lang>
      </Link>
      
      <Link href={`${router.asPath}`} locale="fa">
        <Lang font="fa"  active={t('lang') === 'fa' ? true : false}>
          فا
        </Lang>
      </Link>
    </ChangeLang >
  )
}

export default LangToggler

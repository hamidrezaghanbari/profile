import { useDispatch, useSelector } from 'react-redux'
import { changeLang, selectTheme as selectLang } from '../../lib/redux/theme/theme.slice'
import { ChangeLang, Lang } from '../widgets/forall/index.widgets'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangToggler = () => {
  const router = useRouter()
  console.log(router)

  const lang = useSelector(selectLang)
  const dispatch = useDispatch()

  return (
    <ChangeLang lang={lang}>
      {/* <Lang onClick={() => lang === 'fa' && setLang('en')} active={lang === 'en' ? true : false}> */}
      <Link href={`${router.asPath}`} locale="en">
        <Lang font="en" onClick={() => dispatch(changeLang('en'))} active={lang === 'en' ? true : false}>
          en
        </Lang>
      </Link>
      {/* <Lang onClick={() => lang === 'en' && setLang('fa')} active={lang === 'fa' ? true : false}> */}
      <Link href={`${router.asPath}`} locale="fa">
        <Lang font="fa" onClick={() => dispatch(changeLang('fa'))} active={lang === 'fa' ? true : false}>
          فا
        </Lang>
      </Link>
    </ChangeLang >
  )
}

export default LangToggler

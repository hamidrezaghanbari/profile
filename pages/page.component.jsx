import PageWrapper, { MainSec } from '../components/widgets/forall/index.widgets'
import LangToggler from '../components/forall/lang-toggler'
import InfoSec from '../components/forall/info-sec'
import { useSelector } from 'react-redux'
import { GlobalStyles } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { enTheme, faTheme } from '../lib/theme/theme'

const PageComponent = ({ Component, pageProps }) => {
    const theme = useSelector(state => state.theme.lang)
    const themeMode = theme === 'en' ? enTheme : faTheme

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />


            <PageWrapper>
                <MainSec>

                    <LangToggler />

                    <InfoSec />

                    <Component {...pageProps} />

                </MainSec>
            </PageWrapper>

        </ThemeProvider>
    )
}


export default PageComponent
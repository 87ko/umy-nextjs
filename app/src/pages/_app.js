import "../styles/globals.css"
import { AppProvider } from "../context/AppContext"
import Layout from "../components/layout/layout1"

function MyApp({ Component, pageProps }) {
    return (
        //ページ遷移の際に必ず呼ばれる処理を記述する
        //サイト全体で適用したいものなど！
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    )
}

export default MyApp

import Layout from '../components/layout'
import deneme from '../components/deneme.module.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout color={deneme.secondColor}>
      <Component {...pageProps} />
    </Layout>
  )
}

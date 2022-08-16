import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/exception/ErrorBoundary'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ErrorBoundary fallback={"test"}  // fallback 에러 컴포넌트 만들어야함
      >
        <Head>
          {/* TODO */}
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ErrorBoundary>
    </>

  )
}

export default MyApp

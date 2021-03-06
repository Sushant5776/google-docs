import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@material-tailwind/react/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

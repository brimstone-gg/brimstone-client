import App from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import '../styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Brimstone.GG - VALORANT Statistics</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <>
        <NextNprogress
          color='#2d3748'
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          options={{
            parent: '#main',
            showSpinner: false,
            easing: 'ease',
            speed: 500
          }}
        />
        <div id='brimstone-app'>
          <Component {...pageProps} />
        </div>
      </>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const appProps = await App.getInitialProps(ctx)

  return {
    props: { ...appProps }
  }
}

export default MyApp

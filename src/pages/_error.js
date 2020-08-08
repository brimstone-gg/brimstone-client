import Link from 'next/link'
import Layout from '@/components/Layout'

const ErrorPage = ({ statusCode }) => (
  <Layout>
    {statusCode ? <h1 className='mt-2'>{statusCode} - Something went wrong..</h1> : <h1 className='mt-2'>404 - Page Not Found</h1>}
    <Link href='/'>
      <a>
        <span className='text-sm'>Back home</span>
      </a>
    </Link>
  </Layout>
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage

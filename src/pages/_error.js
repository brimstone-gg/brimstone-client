import Link from 'next/link'
import Layout from '@/components/Layout'

const ErrorPage = () => (
  <Layout>
    <h1 className='mt-2'>404 - Page Not Found</h1>
    <Link href='/'>
      <a>
        <span className='text-sm'>Back home</span>
      </a>
    </Link>
  </Layout>
)

export default ErrorPage

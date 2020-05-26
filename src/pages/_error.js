import Router from 'next/router'

const ErrorPage = () => <h1>404 - Page Not Found</h1>

export default ErrorPage

export async function getServerSideProps({ res }) {
  if (res) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
  } else {
    Router.push('/')
  }

  return {
    props: {}
  }
}

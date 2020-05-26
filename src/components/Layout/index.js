import Navbar from '../Navigation/Navbar'

const Layout = props => {
  return (
    <>
      <div className='bg-image-wrapper'>
        <div className='bg-image'>
          <img alt='' className='bg-image-img' src='/images/background.jpg' />
        </div>
      </div>
      <Navbar />
      <main id='main'>
        <div className='container layout-container mx-auto px-4 md:px-6 lg:px-8'>{props.children}</div>
      </main>
    </>
  )
}

export default Layout

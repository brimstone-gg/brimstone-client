import Navbar from '../Navigation/Navbar'
import Footer from '../Footer'

const Layout = props => {
  return (
    <>
      <div className='bg-image-wrapper'>
        <div className='bg-image'>
          <img alt='brimstone background image' className='bg-image-img' src='/images/background.jpg' />
        </div>
      </div>
      <Navbar />
      <main id='main'>
        <div className='content-wrapper container'>{props.children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout

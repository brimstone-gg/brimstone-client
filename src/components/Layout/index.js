import Navbar from '../Navigation/Navbar'
import Footer from '../Footer'
import { CDN } from '@/utils/helpers'

const Layout = ({ children, background }) => {
  return (
    <>
      <div className='bg-image-wrapper'>
        <div className='bg-image'>
          <img alt='brimstone background image' className='bg-image-img' src={CDN(background ?? '/images/background.jpg')} />
        </div>
      </div>
      <Navbar />
      <main id='main'>
        <div className='content-wrapper container'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout

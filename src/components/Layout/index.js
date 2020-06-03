import Navbar from '../Navigation/Navbar'

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
    </>
  )
}

export default Layout

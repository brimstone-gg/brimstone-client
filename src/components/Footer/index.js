import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='container mx-auto'>
          <div className='m-auto pt-4 text-white flex flex-wrap justify-between'>
            <div className='p-5 w-48 '>
              <div className='footer__link-header'>Home</div>
              <Link href='/'>
                <a className='my-3 block'>Home</a>
              </Link>
              <Link href='/agents'>
                <a className='my-3 block'>Agents</a>
              </Link>
              <Link href='/maps'>
                <a className='my-3 block'>Maps</a>
              </Link>
              <Link href='/weapons'>
                <a className='my-3 block'>Weapons</a>
              </Link>
            </div>
            <div className='p-5 w-48 '>
              <div className='footer__link-header'>Brimstone</div>
              <Link href='/'>
                <a className='my-3 block'>Terms of Service</a>
              </Link>
              <Link href='/'>
                <a className='my-3 block'>Privacy Policy</a>
              </Link>
              <Link href='/'>
                <a className='my-3 block'>About Brimstone</a>
              </Link>
            </div>
            <div className='p-5 w-48 '>
              <div className='footer__link-header'>Contact</div>
              <a className='my-3 block' href='mailto:admin@brimstone.gg'>
                Email
              </a>
              <Link href='/'>
                <a className='my-3 block'>Support</a>
              </Link>
              <a className='my-3 block' href='https://twitter.com/brim_gg'>
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className='pt-2 container mx-auto'>
          <div className='flex pb-5 px-3 m-auto pt-5 border-t border-gray-900 text-white text-sm flex-col md:flex-row'>
            <div className='mt-2'>© Copyright 2020. All Rights Reserved.</div>
            <div className='flex flex-row mt-2 md:flex-auto md:flex-row-reverse'>
              <a href='/#' className='w-6 mx-1'>
                <svg
                  className='fill-current cursor-pointer text-gray-500 hover:text-gray-400'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                >
                  <path
                    id='Twitter'
                    d='M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z'
                  ></path>
                </svg>
              </a>
              <a href='/#' className='w-6 mx-1'>
                <svg
                  className='fill-current cursor-pointer text-gray-500 hover:text-gray-400'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                >
                  <path
                    id='Facebook'
                    d='M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

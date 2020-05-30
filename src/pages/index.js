import Layout from '@/components/Layout'

const App = () => {
  return (
    <Layout>
      <div className='flex py-24 justify-center'>
        <div className='text-center w-full'>
          <div className='md:text-3xl text-3xl'>Start by typing the name of an agent..</div>
          <div className='mt-8 flex justify-center relative'>
            <div className='flex w-full'>
              <div className='relative text-gray-600 mx-auto w-1/2'>
                <input
                  type='text'
                  placeholder='Search Username, Agents, Maps and Weapons'
                  className='bg-general-background h-14 w-full px-5 pr-10 rounded-lg text-nav-text text-sm border border-teal-900 tracking-wider focus:outline-none'
                />
                <button type='submit' className='absolute right-0 top-0 mt-3 mr-3 focus:outline-none text-nav-text'>
                  <svg className='h-4 w-4 m-2 fill-current' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 56.966 56.966'>
                    <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App

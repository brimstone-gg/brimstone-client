import Layout from '@/components/Layout'
import SearchBar from '@/UI/SearchBar'

const App = () => {
  return (
    <Layout>
      <div className='flex py-24 justify-center'>
        <div className='text-center w-full'>
          <div className='md:text-2xl text-2xl'>Start by typing the name of an agent..</div>
          <div className='mt-8 flex justify-center relative'>
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App

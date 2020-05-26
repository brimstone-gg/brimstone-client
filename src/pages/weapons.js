import Layout from '../components/Layout'

const Weapons = () => {
  return (
    <Layout>
      <main className='weapons-page-wrapper'>
        <div className='weapons-page'>
          <div>
            <div className='weapons-title'>
              <h1 className='text-2xl'>Valorant Weapons</h1>
            </div>
            <div className='weapons-grid'></div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Weapons

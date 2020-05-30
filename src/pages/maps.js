import Layout from '@/components/Layout'
import MapCard from '@/components/Cards/MapCard'

import { data } from '../data/maps.json'

const Maps = () => {
  return (
    <Layout>
      <main className='maps-page-wrapper'>
        <div className='maps-page'>
          <div>
            <div className='maps-title'>
              <h1 className='text-2xl'>Valorant Maps</h1>
            </div>
            <div className='maps-grid'>
              {data.map((el, i) => (
                <MapCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Maps

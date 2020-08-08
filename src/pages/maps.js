import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import MapCard from '@/components/Cards/MapCard'

import { maps } from '../data/maps.json'

const Maps = () => {
  return (
    <Layout>
      <motion.div className='maps-page-wrapper' initial='initial' animate='animate'>
        <div className='maps-page'>
          <div>
            <div className='maps-title'>
              <motion.h1 className='text-2xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Valorant Maps
              </motion.h1>
            </div>
            <div className='maps-grid'>
              {maps.map((el, i) => (
                <MapCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Maps

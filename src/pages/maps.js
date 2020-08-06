import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import MapCard from '@/components/Cards/MapCard'
import { stagger } from '@/utils/animation'

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
            <motion.div className='maps-grid' variants={stagger}>
              {maps.map((el, i) => (
                <MapCard data={el} key={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Maps

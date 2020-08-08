import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WeaponCard from '@/components/Cards/WeaponCard'

import { sidearms, smgs, shotguns, rifles, snipers, heavies } from '../data/weapons.json'

const allWeapons = [ ...sidearms, ...smgs, ...shotguns, ...rifles, ...snipers, ...heavies ]

const Weapons = () => {
  return (
    <Layout>
      <motion.div className='weapons-page-wrapper' initial='initial' animate='animate'>
        <div className='weapons-page'>
          <div>
            <div className='weapons-title'>
              <motion.h1 className='text-2xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Valorant Weapons
              </motion.h1>
            </div>
            <div className='weapons-grid'>
              {allWeapons.map((el, i) => (
                <WeaponCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Weapons

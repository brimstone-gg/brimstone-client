import Layout from '@/components/Layout'
import WeaponCard from '@/components/Cards/WeaponCard'

import { sidearms, smgs, shotguns, rifles, snipers, heavies } from '../data/weapons.json'

const allWeapons = [ ...sidearms, ...smgs, ...shotguns, ...rifles, ...snipers, ...heavies ]

const Weapons = () => {
  return (
    <Layout>
      <main className='weapons-page-wrapper'>
        <div className='weapons-page'>
          <div>
            <div className='weapons-title'>
              <h1 className='text-2xl'>Valorant Weapons</h1>
            </div>
            <div className='weapons-grid'>
              {allWeapons.map((el, i) => (
                <WeaponCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Weapons

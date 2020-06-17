import { useState } from 'react'
import Layout from '@/components/Layout'
import { MapTabs } from '@/components/Navigation/Tabs'
import { getMap, getMapPaths } from '@/utils/API'
import { CDN } from '@/utils/helpers'

const MapPage = ({ map }) => {
  const [ side, setSide ] = useState('attacking')
  const [ rotation, setRotation ] = useState('0deg')
  const [ labels, setLabels ] = useState(true)
  const [ walls, setWalls ] = useState(false)

  const changeSide = setTo => {
    setSide(setTo)
    if (setTo === 'attacking') {
      setRotation('0deg')
    } else {
      setRotation('180deg')
    }
  }

  return (
    <Layout background={`/images/maps/list/${map.name.toLowerCase()}.jpg`}>
      <MapTabs />
      <div className='map-page-wrapper'>
        <div className='map-info'>
          <div className='maps-group'>
            <h4 className='text-center'>Map Legend</h4>
            <ul className='map-legend'>
              <li className='map-legend-item'>
                <img src={CDN('/images/maps/icons/red-buy-zone.svg')} alt='Defenders Buy Zone' />
                <span>{side === 'attacking' ? 'Attackers Buy Zone' : 'Defenders Buy Zone'}</span>
              </li>
              <li className='map-legend-item'>
                <img src={CDN('/images/maps/icons/green-buy-zone.svg')} alt='Attackers Buy Zone' />
                <span>{side === 'defending' ? 'Attackers Buy Zone' : 'Defenders Buy Zone'}</span>
              </li>
              <li className='map-legend-item'>
                <img src={CDN('/images/maps/icons/defenders-spawn-barrier.svg')} alt='Defenders Spawn Barrier' />
                <span>Defenders Spawn Barrier</span>
              </li>
              <li className='map-legend-item'>
                <img src={CDN('/images/maps/icons/attackers-spawn-barrier.svg')} alt='Attackers Spawn Barrier' />
                <span>Attackers Spawn Barrier</span>
              </li>
              <li className='map-legend-item'>
                <img src={CDN('/images/maps/icons/spike-plant-zone.svg')} alt='Spike Plant Zone' />
                <span>Spike Plant Zone</span>
              </li>
            </ul>
          </div>
          <div className='maps-group'>
            <h4 className='text-center'>Map Options</h4>
            <div className='map-options'>
              <div
                className={`map-options__button ${side === 'attacking' ? 'map-options__button-active' : ''}`}
                onClick={() => changeSide('attacking')}
              >
                <span>Attacking</span>
              </div>
              <div
                className={`map-options__button ${side === 'defending' ? 'map-options__button-active' : ''}`}
                onClick={() => changeSide('defending')}
              >
                <span>Defending</span>
              </div>
            </div>
            <div className='map-extra-options'>
              <div className='map-options__toggle'>
                <label htmlFor='labelsToggle' className='map-options__toggle-label'>
                  Labels
                </label>
                <div className={`map-options__toggle-switch ${labels ? 'bg-blue-900' : 'bg-card-border'}`}>
                  <label
                    htmlFor='labelToggle'
                    className={`map-options__toggle-switch-label ${labels ? 'translate-x-70p' : 'translate-x-0'}`}
                  ></label>
                  <input onClick={() => setLabels(!labels)} type='checkbox' id='labelToggle' className='map-options__toggle-switch-input' />
                </div>
              </div>
              <div className='map-options__toggle'>
                <label htmlFor='labelsToggle' className='map-options__toggle-label'>
                  Spawn Barriers
                </label>
                <div className={`map-options__toggle-switch ${walls ? 'bg-blue-900' : 'bg-card-border'}`}>
                  <label
                    htmlFor='wallsToggle'
                    className={`map-options__toggle-switch-label ${walls ? 'translate-x-70p' : 'translate-x-0'}`}
                  ></label>
                  <input onClick={() => setWalls(!walls)} type='checkbox' id='wallsToggle' className='map-options__toggle-switch-input' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='maps-map'>
          <img src={CDN(map.images.map.layout)} alt={`VALORANT Map ${map.name}`} style={{ transform: `rotate(${rotation})` }} />
          {labels && side === 'attacking' && <img src={CDN(map.images.map.offense)} alt={map.name} />}
          {labels && side === 'defending' && <img src={CDN(map.images.map.defense)} alt={map.name} />}
          {walls && side === 'attacking' && <img src={CDN(map.images.map.walls.offense)} alt={map.name} />}
          {walls && side === 'defending' && <img src={CDN(map.images.map.walls.defense)} alt={map.name} />}
        </div>
      </div>
    </Layout>
  )
}

export default MapPage

export async function getStaticProps({ params }) {
  const data = await getMap(params.map)
  return {
    props: {
      map: data[0]
    }
  }
}

export async function getStaticPaths() {
  const allPaths = await getMapPaths()
  return {
    paths: allPaths?.map(({ path }) => path) ?? [],
    fallback: false
  }
}

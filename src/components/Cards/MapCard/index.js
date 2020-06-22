import Link from 'next/link'
import { CDN } from '@/utils/helpers'

const MapCard = ({ data }) => {
  return (
    <Link href='/maps/[map]' as={data.path}>
      <a className='map-block' title={`VALORANT Map ${data.name}`}>
        <img src={CDN(data.images.list)} className='map-hero' alt={`VALORANT Map ${data.name}`} />
        <h2 className='map-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default MapCard

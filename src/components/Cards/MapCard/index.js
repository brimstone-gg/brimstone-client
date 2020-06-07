import Link from 'next/link'

const MapCard = ({ data }) => {
  return (
    <Link href={data.path}>
      <a className='map-block' title={`VALORANT Map ${data.name}`}>
        <img src={data.images.list} className='map-hero' alt={`VALORANT Map ${data.name}`} />
        <h2 className='map-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default MapCard

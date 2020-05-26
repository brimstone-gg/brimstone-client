import Link from 'next/link'

const MapCard = ({ data }) => {
  return (
    <Link href={data.page}>
      <a className='map-block'>
        <img src={data.map_image} className='map-hero' />
        <h2 className='map-name'>{data.map_name}</h2>
      </a>
    </Link>
  )
}

export default MapCard

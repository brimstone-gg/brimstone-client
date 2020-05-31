import Link from 'next/link'

const MapCard = ({ data }) => {
  return (
    <Link href={data.page}>
      <a className='map-block'>
        <img src={data.image} className='map-hero' />
        <h2 className='map-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default MapCard

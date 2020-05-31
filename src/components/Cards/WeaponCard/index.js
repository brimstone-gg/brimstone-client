import Link from 'next/link'

const WeaponCard = ({ data }) => {
  return (
    <Link href={data.path}>
      <a className='weapon-block'>
        <img src={data.images.large} className='weapon-hero' />
        <h2 className='weapon-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default WeaponCard

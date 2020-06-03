import Link from 'next/link'

const WeaponCard = ({ data }) => {
  return (
    <Link href={data.path}>
      <a className='weapon-block' title={`VALORANT Weapon ${data.name}`}>
        <img src={data.images.model} className='weapon-hero' alt={`VALORANT Weapon ${data.name}`} />
        <h2 className='weapon-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default WeaponCard

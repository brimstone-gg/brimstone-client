import Link from 'next/link'
import { motion } from 'framer-motion'
import { CDN } from '@/utils/helpers'
import { fadeInUp } from '@/utils/animation'

const WeaponCard = ({ data }) => {
  return (
    <Link href='/weapons/[weapon]' as={data.path}>
      <motion.a className='weapon-block' title={`VALORANT Weapon ${data.name}`} variants={fadeInUp}>
        <span className={`weapon__tier weapon__tier-${data.tier}`}>{data.tier} tier</span>
        <picture>
          <img
            src={CDN(data.images.model)}
            className='weapon-hero'
            alt={`VALORANT Weapon ${data.name}`}
            title={`VALORANT Weapon ${data.name}`}
          />
        </picture>
        <h4 className='weapon-name'>{data.name}</h4>
        <dl className='weapon__desc-list weapon__desc-list_main'>
          <dt className='weapon__desc-title'>{data.type}</dt>
          <dd className='weapon__desc-text'>
            <img className='price_credits' src={CDN('/images/price_credits.svg')} alt='Weapon Cost' title='Weapon Cost' />
            {data.cost}
          </dd>
        </dl>
        <dl className='weapon__desc-list weapon__desc-list_secondary'>
          <dt className='weapon__desc-title'>Magazine Capacity</dt>
          <dd className='weapon__desc-text'>{data.magazine}</dd>
          <dt className='weapon__desc-title'>Wall Penetration</dt>
          <dd className='weapon__desc-text'>{data.penetration}</dd>
          <dt className='weapon__desc-title'>Mode</dt>
          <dd className='weapon__desc-text'>{data.fire.primary.mode}</dd>
          <dt className='weapon__desc-title'>Fire Rate</dt>
          <dd className='weapon__desc-text'>{data.fire.primary.rate}</dd>
        </dl>
      </motion.a>
    </Link>
  )
}

export default WeaponCard

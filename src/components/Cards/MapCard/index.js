import Link from 'next/link'
import { motion } from 'framer-motion'
import { CDN } from '@/utils/helpers'
import { fadeInUp } from '@/utils/animation'

const MapCard = ({ data }) => {
  return (
    <Link href='/maps/[map]' as={data.path}>
      <motion.a className='map-block' title={`VALORANT Map ${data.name}`} variants={fadeInUp}>
        <img src={CDN(data.images.list)} className='map-hero' alt={`VALORANT Map ${data.name}`} />
        <h2 className='map-name'>{data.name}</h2>
      </motion.a>
    </Link>
  )
}

export default MapCard

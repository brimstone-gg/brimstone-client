import Link from 'next/link'
import { motion } from 'framer-motion'
import { CDN } from '@/utils/helpers'
import { fadeInUp } from '@/utils/animation'

const AgentCard = ({ data }) => {
  return (
    <Link href='/agents/[agent]' as={data.path}>
      <motion.a variants={fadeInUp} className='agent-block' title={`VALORANT Agent ${data.name}`}>
        <div className='agent-bg'></div>
        <img src={CDN(data.images.profile)} className='agent-hero' alt={`VALORANT Agent ${data.name}`} />
        <h2 className='agent-name'>{data.name}</h2>
      </motion.a>
    </Link>
  )
}

export default AgentCard

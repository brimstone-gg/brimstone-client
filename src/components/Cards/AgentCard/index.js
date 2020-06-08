import Link from 'next/link'
import { CDN } from '@/utils/helpers'

const AgentCard = ({ data }) => {
  return (
    <Link href={data.path}>
      <a className='agent-block' title={`VALORANT Agent ${data.name}`}>
        <div className='agent-bg'></div>
        <img src={CDN(data.images.profile)} className='agent-hero' alt={`VALORANT Agent ${data.name}`} />
        <h2 className='agent-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default AgentCard

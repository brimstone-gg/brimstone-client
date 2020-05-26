import Link from 'next/link'

const AgentCard = ({ data }) => {
  return (
    <Link href={data.page}>
      <a className='agent-block'>
        <div className='agent-bg'></div>
        <img src={data.agent_image} className='agent-hero' />
        <h2 className='agent-name'>{data.agent_name}</h2>
      </a>
    </Link>
  )
}

export default AgentCard

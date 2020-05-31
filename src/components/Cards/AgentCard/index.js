import Link from 'next/link'

const AgentCard = ({ data }) => {
  return (
    <Link href={data.page}>
      <a className='agent-block'>
        <div className='agent-bg'></div>
        <img src={data.image} className='agent-hero' />
        <h2 className='agent-name'>{data.name}</h2>
      </a>
    </Link>
  )
}

export default AgentCard

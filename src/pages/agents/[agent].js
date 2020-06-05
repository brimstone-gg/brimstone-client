import Layout from '@/components/Layout'
import { AgentTabs } from '@/components/Navigation/Tabs'
import { getAgent, getAgentPaths } from '@/utils/API'

const AgentPage = ({ agent }) => {
  return (
    <Layout>
      <AgentTabs />
      <h1 className='mt-2'>Individual Agent Page</h1>
      <h1>{agent.name}</h1>
    </Layout>
  )
}

export default AgentPage

export async function getStaticProps({ params }) {
  const data = await getAgent(params.agent)
  return {
    props: {
      agent: data[0]
    }
  }
}

export async function getStaticPaths() {
  const allPaths = await getAgentPaths()
  return {
    paths: allPaths?.map(({ path }) => path) ?? [],
    fallback: false
  }
}

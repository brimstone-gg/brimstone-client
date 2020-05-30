import Layout from '@/components/Layout'
import AgentCard from '@/components/Cards/AgentCard'

import { data } from '../data/agents.json'

const Agents = () => {
  return (
    <Layout>
      <main className='agents-page-wrapper'>
        <div className='agents-page'>
          <div>
            <div className='agents-title'>
              <h1 className='text-2xl'>Valorant Agents</h1>
            </div>
            <div className='agents-grid'>
              {data.map((el, i) => (
                <AgentCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Agents

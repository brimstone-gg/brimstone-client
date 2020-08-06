import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AgentCard from '@/components/Cards/AgentCard'

import { agents } from '../data/agents.json'

const Agents = () => {
  return (
    <Layout>
      <motion.div className='agents-page-wrapper' initial='initial' animate='animate'>
        <div className='agents-page'>
          <div>
            <div className='agents-title'>
              <motion.h1 className='text-2xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Valorant Agents
              </motion.h1>
            </div>
            <div className='agents-grid'>
              {agents.map((el, i) => (
                <AgentCard data={el} key={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Agents

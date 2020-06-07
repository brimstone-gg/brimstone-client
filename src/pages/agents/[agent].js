import Layout from '@/components/Layout'
import { AgentTabs } from '@/components/Navigation/Tabs'
import { getAgent, getAgentPaths } from '@/utils/API'

const classIcons = {
  Controller:
    'M23.9987 18.7041L7.11968 30.2642C7.76069 31.9911 8.65912 33.5929 9.76834 35.0231L23.9994 25.2766L38.232 35.0242C39.3412 33.5944 40.2397 31.9928 40.8808 30.2663L23.9987 18.7041ZM32.7805 39.7185L23.9987 33.7041L15.2187 39.7174C17.8164 41.172 20.8117 42.0013 24.0006 42.0013C27.1887 42.0013 30.1833 41.1725 32.7805 39.7185ZM23.9994 10.2766L6.0564 22.5653C6.78774 13.2949 14.5423 6 24.0006 6C33.4596 6 41.2146 13.2959 41.945 22.5672L23.9994 10.2766Z',
  Sentinel:
    'M26.5458 41.8227C35.282 40.5863 42.0013 33.0781 42.0013 24.0006C42.0013 21.5723 41.5204 19.2563 40.6487 17.1426L26.5458 41.8227ZM21.4556 41.8227C12.7194 40.5864 6 33.0782 6 24.0006C6 21.5722 6.48087 19.2562 7.35258 17.1424L21.4556 41.8227ZM10.5837 12H37.4175C34.1215 8.3175 29.3317 6 24.0006 6C18.6695 6 13.8797 8.3175 10.5837 12ZM31.8018 19H16.1982L24 32.6532L31.8018 19Z',
  Initiator:
    'M16.9797 7.42062L25.9297 21H11.9297L25.7182 41.9204C25.1529 41.9739 24.5799 42.0013 24.0006 42.0013C14.0592 42.0013 6 33.9421 6 24.0006C6 16.55 10.5266 10.1566 16.9797 7.42062ZM23.2398 6.01579L37.0703 27H23.0703L31.7917 40.2324C37.8319 37.3279 42.0013 31.1512 42.0013 24.0006C42.0013 14.0592 33.9421 6 24.0006 6C23.7457 6 23.4921 6.0053 23.2398 6.01579Z',
  Duelist:
    'M34.4307 38.6733C31.4881 40.7688 27.8883 42.0013 24.0006 42.0013C20.1126 42.0013 16.5125 40.7686 13.5698 38.6728L24 28.2426L34.4307 38.6733ZM38.6733 34.4307L28.2426 24L38.6728 13.5698C40.7686 16.5125 42.0013 20.1126 42.0013 24.0006C42.0013 27.8883 40.7688 31.4881 38.6733 34.4307ZM24 19.7573L34.4299 9.3274C31.4875 7.23223 27.888 6 24.0006 6C20.113 6 16.5132 7.23244 13.5706 9.32793L24 19.7573ZM19.7574 24L9.32794 13.5706C7.23244 16.5131 6 20.113 6 24.0006C6 27.888 7.23223 31.4875 9.3274 34.4299L19.7574 24Z'
}

const AgentAbility = ({ ability }) => {
  return (
    <div className='p-4 text-main-text bg-general-background rounded border border-card-border shadow'>
      <div className='flex items-center pb-4'>
        <img className='w-8' src={ability.image} alt={`VALORANT ${ability.name} ability`} />
        <h3 className='pl-2 flex-1 text-lg'>{ability.name}</h3>
        <span className='pr-2 text-xs'>Key</span>
        <span className='bg-navbar rounded border-card-border text-sm font-bold px-3 py-1 pointer-events-none'>{ability.keybind}</span>
      </div>
      <div className='flex flex-col'>
        <span>Cost: {ability.cost}</span>
        <span>Uses: {ability.uses}</span>
        <span className='pt-4 text-sm'>{ability.description}</span>
      </div>
    </div>
  )
}

const AgentPage = ({ agent }) => {
  return (
    <Layout background={`/images/agents/background/${agent.key}.jpg`}>
      <AgentTabs />
      <div className='agents-page-wrapper'>
        <div className='agent-header'>
          <div className='agent-header-text'>
            <div className='flex flex-row flex-1 items-center'>
              <img src={agent.images.search} className='agent-image w-20' alt={`VALORANT Agent ${agent.name}`} />
              <div className='flex flex-col ml-2'>
                <h1 className='agent-header__agent'>{agent.name}</h1>
                <span className='text-xs -mt-2 font-bold text-teal-600'>Valorant Agent</span>
              </div>
            </div>
            <div className='agent-header__meta'>
              <div>
                <div className='text-xs font-bold text-teal-600'>Class</div>
                <div className='flex items-center text-base'>
                  <svg viewBox='0 0 48 48' fill='currentColor' className='agent-header__meta-icon'>
                    <path fillRule='evenodd' clipRule='evenodd' d={classIcons[`${agent.class}`]}></path>
                  </svg>
                  <span className='text-white'>{agent.class}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {agent.abilities.map((el, i) => (
            <AgentAbility ability={el} key={i} />
          ))}
        </div>
      </div>
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

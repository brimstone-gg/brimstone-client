import Layout from '@/components/Layout'
import { MapTabs } from '@/components/Navigation/Tabs'
import { getMap, getMapPaths } from '@/utils/API'

const MapPage = ({ map }) => {
  return (
    <Layout background={map.name}>
      <MapTabs />
      <h1 className='mt-2'>Individual Map Page</h1>
      <h1>{map.name}</h1>
    </Layout>
  )
}

export default MapPage

export async function getStaticProps({ params }) {
  const data = await getMap(params.map)
  return {
    props: {
      map: data[0]
    }
  }
}

export async function getStaticPaths() {
  const allPaths = await getMapPaths()
  return {
    paths: allPaths?.map(({ path }) => path) ?? [],
    fallback: false
  }
}

import Layout from '@/components/Layout'
import { getWeapon, getWeaponPaths } from '@/utils/API'

const WeaponPage = ({ weapon }) => {
  return (
    <Layout>
      <h1 className='mt-2'>Individual Weapon Page</h1>
      <h1>{weapon.name}</h1>
    </Layout>
  )
}

export default WeaponPage

export async function getStaticProps({ params }) {
  const data = await getWeapon(params.weapon)
  return {
    props: {
      weapon: data[0]
    }
  }
}

export async function getStaticPaths() {
  const allPaths = await getWeaponPaths()
  return {
    paths: allPaths?.map(({ path }) => path) ?? [],
    fallback: false
  }
}

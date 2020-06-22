import Layout from '@/components/Layout'
import { WeaponTabs } from '@/components/Navigation/Tabs'
import { getWeapon, getWeaponPaths } from '@/utils/API'
import { CDN } from '@/utils/helpers'

const WeaponPage = ({ weapon }) => {
  return (
    <Layout>
      <WeaponTabs />
      <div className='weapon-page-wrapper'>
        <div className='weapons-weapon'></div>
        <div className='weapon-info'>
          <div className='weapons-group'>
            <h4 className='text-center text-lg'>Weapon Overview</h4>
            <div className='relative'>
              <span className={`weapon__tier weapon__tier-${weapon.tier} top-0 left-0`}>{weapon.tier} tier</span>
              <picture>
                <img
                  src={CDN(weapon.images.model)}
                  className='weapon-hero'
                  alt={`VALORANT Weapon ${weapon.name}`}
                  title={`VALORANT Weapon ${weapon.name}`}
                />
              </picture>
              <h4 className='weapon-name'>{weapon.name}</h4>
              <dl className='weapon__desc-list weapon__desc-list_main'>
                <dt className='weapon__desc-title'>{weapon.type}</dt>
                <dd className='weapon__desc-text'>
                  <img className='price_credits' src={CDN('/images/price_credits.svg')} alt='Weapon Cost' title='Weapon Cost' />
                  {weapon.cost}
                </dd>
              </dl>
              <dl className='weapon__desc-list weapon__desc-list_secondary'>
                <dt className='weapon__desc-title'>Magazine Capacity</dt>
                <dd className='weapon__desc-text'>{weapon.magazine}</dd>
                <dt className='weapon__desc-title'>Wall Penetration</dt>
                <dd className='weapon__desc-text'>{weapon.penetration}</dd>
                <h3 className='weapon__desc-title section-title'>Primary Fire</h3>
                <dd></dd>
                <dt className='weapon__desc-title'>Mode</dt>
                <dd className='weapon__desc-text'>{weapon.fire.primary.mode}</dd>
                <dt className='weapon__desc-title'>Fire Rate</dt>
                <dd className='weapon__desc-text'>{weapon.fire.primary.rate}</dd>
                {weapon.fire.alt && (
                  <>
                    <h3 className='weapon__desc-title section-title'>Alternate Fire</h3>
                    <dd></dd>
                    <dt className='weapon__desc-title'>Mode</dt>
                    <dd className='weapon__desc-text'>{weapon.fire.alt.mode}</dd>
                    <dt className='weapon__desc-title'>Fire Rate</dt>
                    <dd className='weapon__desc-text'>{weapon.fire.alt.rate}</dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
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

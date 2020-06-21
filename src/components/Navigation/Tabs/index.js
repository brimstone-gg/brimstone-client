import CustomLink from '../CustomLink'

import { maps } from '../../../data/maps.json'
import { agents } from '../../../data/agents.json'
import { sidearms, smgs, shotguns, rifles, snipers, heavies } from '../../../data/weapons.json'

const allWeapons = [ ...sidearms, ...smgs, ...shotguns, ...rifles, ...snipers, ...heavies ]

export const MapTabs = () => {
  return (
    <nav className='tabs-nav-wrapper maps'>
      <div className='tabs-nav'>
        {maps.map((el, i) => (
          <CustomLink key={i} href='/maps/[map]' as={el.path} activeClassName='tabs-nav__link-active'>
            <a className='tabs-nav__link'>{el.name}</a>
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}

export const AgentTabs = () => {
  return (
    <nav className='tabs-nav-wrapper agents'>
      <div className='tabs-nav'>
        {agents.map((el, i) => (
          <CustomLink key={i} href='/agents/[agent]' as={el.path} activeClassName='tabs-nav__link-active'>
            <a className='tabs-nav__link'>{el.name}</a>
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}

export const WeaponTabs = () => {
  return (
    <nav className='tabs-nav-wrapper weapons'>
      <div className='tabs-nav'>
        {allWeapons.map((el, i) => (
          <CustomLink key={i} href='/weapons/[weapon]' as={el.path} activeClassName='tabs-nav__link-active'>
            <a className='tabs-nav__link'>{el.name}</a>
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}

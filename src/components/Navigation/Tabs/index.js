import CustomLink from '../CustomLink'

import { maps } from '../../../data/maps.json'
import { agents } from '../../../data/agents.json'

export const MapTabs = () => {
  return (
    <nav className='tabs-nav-wrapper'>
      <div className='tabs-nav'>
        {maps.map((el, i) => (
          <CustomLink key={i} href={el.path} activeClassName='tabs-nav__link-active'>
            <a className='tabs-nav__link'>{el.name}</a>
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}

export const AgentTabs = () => {
  return (
    <nav className='tabs-nav-wrapper'>
      <div className='tabs-nav'>
        {agents.map((el, i) => (
          <CustomLink key={i} href={el.path} activeClassName='tabs-nav__link-active'>
            <a className='tabs-nav__link'>{el.name}</a>
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}

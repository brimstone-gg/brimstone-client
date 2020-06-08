import { useState } from 'react'
import MatchResult from '../MatchResult'
import { ProfileBadge } from '../UI/Badges'
import { CDN } from '@/utils/helpers'

import MatchDetails from '../MatchResult/MatchDetails'

const Profile = props => {
  const { user } = props
  const scores = [
    {
      match_result_label: 'Victory',
      match_result_score: '13 - 10',
      match_map: 'Haven',
      match_time: '3 Hours Ago',
      party_size: '5',
      combat_score_value: '293',
      combat_score_label: 'Combat Score',
      avg_damage_value: '198',
      avg_damage_label: 'Avg. damage',
      kda_value: '19 / 17 / 2',
      kda_label: 'KDA',
      agent: '/images/agents/profile/breach.png'
    },
    {
      match_result_label: 'Victory',
      match_result_score: '13 - 4',
      match_map: 'Split',
      match_time: '5 Hours Ago',
      party_size: '3',
      combat_score_value: '357',
      combat_score_label: 'Combat Score',
      avg_damage_value: '234',
      avg_damage_label: 'Avg. damage',
      kda_value: '16 / 9 / 1',
      kda_label: 'KDA',
      agent: '/images/agents/profile/jett.png'
    },
    {
      match_result_label: 'Defeat',
      match_result_score: '6 - 13',
      match_map: 'Haven',
      match_time: '1 Day Ago',
      party_size: '4',
      combat_score_value: '214',
      combat_score_label: 'Combat Score',
      avg_damage_value: '182',
      avg_damage_label: 'Avg. damage',
      kda_value: '12 / 16 / 4',
      kda_label: 'KDA',
      agent: '/images/agents/profile/sage.png'
    },
    {
      match_result_label: 'Victory',
      match_result_score: '13 - 12',
      match_map: 'Bind',
      match_time: '3 Days Ago',
      party_size: '5',
      combat_score_value: '302',
      combat_score_label: 'Combat Score',
      avg_damage_value: '189',
      avg_damage_label: 'Avg. damage',
      kda_value: '27 / 17 / 6',
      kda_label: 'KDA',
      agent: '/images/agents/profile/omen.png'
    },
    {
      match_result_label: 'Defeat',
      match_result_score: '9 - 13',
      match_map: 'Split',
      match_time: '3 Days Ago',
      party_size: '5',
      combat_score_value: '214',
      combat_score_label: 'Combat Score',
      avg_damage_value: '220',
      avg_damage_label: 'Avg. damage',
      kda_value: '11 / 21 / 4',
      kda_label: 'KDA',
      agent: '/images/agents/profile/viper.png'
    }
  ]
  const [ open, setOpen ] = useState(new Array(scores.length).fill(false))
  const profileImage = user ? user.twitch.profile_image_url : '/images/default-profile.png'
  const displayName = user ? user.twitch.display_name : 'No user'

  const handleChange = key => {
    let newArr = [ ...open ]
    newArr[key] = !open[key]
    setOpen(newArr)
  }

  return (
    <section className='profile-section-wrapper'>
      <div className='container mx-auto px-4'>
        <div className='relative flex flex-col min-w-0 break-words bg-navbar mx-4 shadow-xl rounded-4'>
          <div className='px-6 pb-16'>
            <div className='flex flex-wrap justify-center'>
              <div className='profile-user-image-wrapper'>
                <img alt={`${displayName} profile image`} src={CDN(profileImage)} className='profile-user-image' />
              </div>
              <div className='profile-user-wrapper'>
                <div className='flex-1'>
                  <h3 className='profile-user-username'>{displayName}</h3>
                  <ProfileBadge type={user.user_type} />
                </div>
                {user && (
                  <div>
                    <div className='flex justify-center py-4'>
                      <div className='mr-4 p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-ice-white'>1.45</span>
                        <span className='text-sm text-main-text'>KDR</span>
                      </div>
                      <div className='mr-4 p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-ice-white'>149,201</span>
                        <span className='text-sm text-main-text'>Kills</span>
                      </div>
                      <div className='p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-ice-white'>102,302</span>
                        <span className='text-sm text-main-text'>Deaths</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {user && (
          <div className='match-history'>
            {scores.map((el, i) => (
              <div className='match-wrapper' key={i}>
                <MatchResult match={el} handleChange={handleChange} index={i} />
                <MatchDetails open={open[i]} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Profile

const MatchResult = props => {
  const { match: placeholder, handleChange, index } = props

  const getMatchResultColor = status => {
    switch (status) {
      case 'Victory':
        return 'lime'
      case 'Defeat':
        return 'red-600'
      default:
        return ''
    }
  }
  const getBorderColor = status => `border-${getMatchResultColor(status)}`

  return (
    <div className={`match ${getBorderColor(placeholder.match_result_label)}`} onClick={() => handleChange(index)}>
      <div className='match__agent ' style={{ backgroundImage: `url(${placeholder.agent})` }}></div>
      <div className='flex flex-1 justify-between'>
        <div className='match__stat hidden lg:flex'>
          <p className='match__stat-value'>{placeholder.combat_score_value}</p>
          <p className='match__stat-label'>{placeholder.combat_score_label}</p>
        </div>
        <div className='match__stat hidden lg:flex'>
          <p className='match__stat-value'>{placeholder.avg_damage_value}</p>
          <p className='match__stat-label'>{placeholder.avg_damage_label}</p>
        </div>
        <div className='match__result'>
          <p className='match__result-label'>{placeholder.match_result_label}</p>
          <p className='match__result-score'>{placeholder.match_result_score}</p>
        </div>
        <div className='match__stat hidden sm:flex'>
          <p className='match__stat-value'>{placeholder.avg_damage_value}</p>
          <p className='match__stat-label'>{placeholder.avg_damage_label}</p>
        </div>
        <div className='match__stat xs:hidden'>
          <p className='match__stat-value'>{placeholder.kda_value}</p>
          <p className='match__stat-label'>{placeholder.kda_label}</p>
        </div>
        <div className='match__meta hidden md:flex'>
          <div className='match__meta-item'>
            <svg viewBox='0 0 55 55' xmlns='http://www.w3.org/2000/svg'>
              <path d='M54.584 2.189a.993.993 0 00-.901-.137l-17.73 5.91-16.724-3.935c-.042-.01-.083.004-.125 0-.107-.011-.214-.025-.321-.002l-18 4A1 1 0 000 9.001v43a.999.999 0 001.217.977l17.807-3.957 16.802 2.965a1.004 1.004 0 00.526-.05c.003-.001.007 0 .01-.002l18-7c.385-.151.638-.521.638-.933v-41a1 1 0 00-.416-.812zM2 9.802l16-3.555v40.951L2 50.754V9.802zm18-3.539l15 3.529v40.016l-15-2.646V6.263zm33 37.054l-16 6.222V9.721l16-5.333v38.929z' />
            </svg>
            Map: {placeholder.match_map}
          </div>
          <div className='match__meta-item'>
            <svg viewBox='0 0 443.294 443.294' xmlns='http://www.w3.org/2000/svg'>
              <path d='M221.647 0C99.433 0 0 99.433 0 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647S343.861 0 221.647 0zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z' />
              <path d='M235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z' />
            </svg>
            {placeholder.match_time}
          </div>
          <div className='match__meta-item'>
            <svg viewBox='0 0 505.4 505.4' xmlns='http://www.w3.org/2000/svg'>
              <path d='M437.1 233.45c14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7-31.9 0-57.7 25.8-57.7 57.7 0 19.5 9.7 36.8 24.6 47.2-12.7 4.4-24.3 11.2-34.1 20-13.5-11.5-29.4-20.3-46.8-25.5 21.1-12.8 35.3-36.1 35.3-62.6 0-40.4-32.7-73.1-73.1-73.1-40.4 0-73.1 32.8-73.1 73.1 0 26.5 14.1 49.8 35.3 62.6-17.2 5.2-32.9 13.9-46.3 25.2-9.8-8.6-21.2-15.3-33.7-19.6 14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7s-57.7 25.8-57.7 57.7c0 19.5 9.7 36.8 24.6 47.2-39.7 13.7-68.2 51.4-68.2 95.7v6.6c0 .2.2.4.4.4h122.3c-.7 5.5-1.1 11.2-1.1 16.9v6.8c0 29.4 23.8 53.2 53.2 53.2h155c29.4 0 53.2-23.8 53.2-53.2v-6.8c0-5.7-.4-11.4-1.1-16.9H505c.2 0 .4-.2.4-.4v-6.6c-.2-44.4-28.6-82.1-68.3-95.8zm-74.8-47.3c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7h-1.6c-22.7-.4-40.9-18.9-40.9-41.7zm-167.4-20.8c0-31.5 25.6-57.1 57.1-57.1s57.1 25.6 57.1 57.1c0 30.4-23.9 55.3-53.8 57h-6.6c-29.9-1.7-53.8-26.6-53.8-57zm-135.6 20.8c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7h-1.6c-22.6-.4-40.9-18.9-40.9-41.7zm66.2 134H16.2c4.5-42.6 40.5-76 84.2-76.3h1.2c20.8.1 39.8 7.8 54.5 20.3-14.4 15.6-25.1 34.8-30.6 56zm241.3 39.8c0 20.5-16.7 37.2-37.2 37.2h-155c-20.5 0-37.2-16.7-37.2-37.2v-6.8c0-62.1 49.6-112.9 111.3-114.7 1.1.1 2.3.1 3.4.1s2.3 0 3.4-.1c61.7 1.8 111.3 52.6 111.3 114.7v6.8zm11.9-39.8c-5.5-21.1-16-40-30.3-55.6 14.8-12.8 34-20.5 55-20.7h1.2c43.7.3 79.7 33.7 84.2 76.3H378.7z' />
            </svg>
            Party Size: {placeholder.party_size}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchResult

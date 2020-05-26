import Link from 'next/link'

import { data } from './placeholder.json'

const TableData = ({ data }) => {
  return (
    <tr className='match-table__even'>
      <td className='match-table__agent-cell'>
        <img src='/images/agents/small/jett.png' className='match-table__agent' />
      </td>

      <td style={{ borderLeft: '0.2rem solid rgb(255, 70, 85)' }}>
        <Link href={`/profile/${data.player_name}/${data.player_discriminator}`}>
          <a className='match-table__nickname'>
            {data.player_name} #{data.player_discriminator}
          </a>
        </Link>
      </td>

      <td className='match-table__stat-value match-table__first'>{data.kills}</td>
      <td className='match-table__stat-value'>{data.deaths}</td>
      <td className='match-table__stat-value'>{data.assists}</td>

      <td className='match-table__stat-value match-table__first'>{data.kd}</td>
      <td className='match-table__stat-value'>{data.kr}</td>
      <td className='match-table__stat-value'>{data.acs}</td>
      <td className='match-table__stat-value'>{data.adr}</td>

      <td className='match-table__stat-value match-table__first'>{data.three_k}</td>
      <td className='match-table__stat-value'>{data.four_k}</td>
      <td className='match-table__stat-value'>{data.ace}</td>

      <td className='match-table__stat-value match-table__first'>{data.ek}</td>
      <td className='match-table__stat-value'>{data.ed}</td>
      <td className='match-table__stat-value'>{data.es}</td>

      <td className='match-table__stat-value match-table__first'>{data.ar}</td>
      <td className='match-table__stat-value'>{data.ult}</td>
      <td className='match-table__stat-value'>{data.uk}</td>
    </tr>
  )
}

const MatchDetails = props => {
  const { open } = props

  return (
    <div className={'match-details ' + (open ? 'block' : 'hidden')}>
      <table className='match-table'>
        <thead>
          <tr className='match-table__groups'>
            <th colSpan='2'></th>
            <th colSpan='3'>Basic</th>
            <th colSpan='4'>Average</th>
            <th colSpan='3'>Multikills</th>
            <th colSpan='3'>Entry</th>
            <th colSpan='3'>Abilities</th>
          </tr>
          <tr className='match-table__stats'>
            <th colSpan='2'></th>

            <th className='match-table__first'>
              <a href='#' title='Kills' className='match-table__stat-name'>
                K
              </a>
            </th>
            <th>
              <a href='#' title='Deaths' className='match-table__stat-name'>
                D
              </a>
            </th>
            <th>
              <a href='#' title='Assists' className='match-table__stat-name'>
                A
              </a>
            </th>

            <th className='match-table__first'>
              <a href='#' title='Kills to deaths ratio' className='match-table__stat-name'>
                K/D
              </a>
            </th>
            <th>
              <a href='#' title='Average kills per round' className='match-table__stat-name'>
                K/R
              </a>
            </th>
            <th>
              <a href='#' title='Average combat score per round' className='match-table__stat-name'>
                ACS
              </a>
            </th>
            <th>
              <a href='#' title='Average damage per round' className='match-table__stat-name'>
                ADR
              </a>
            </th>

            <th className='match-table__first'>
              <a href='#' title='3 kills rounds' className='match-table__stat-name'>
                3K
              </a>
            </th>
            <th>
              <a href='#' title='4 kills rounds' className='match-table__stat-name'>
                4K
              </a>
            </th>
            <th>
              <a href='#' title='5 kills rounds' className='match-table__stat-name'>
                Ace
              </a>
            </th>

            <th className='match-table__first'>
              <a href='#' title='Entry kills' className='match-table__stat-name'>
                EK
              </a>
            </th>
            <th>
              <a href='#' title='Entry deaths' className='match-table__stat-name'>
                ED
              </a>
            </th>
            <th>
              <a href='#' title='Entry success' className='match-table__stat-name'>
                ES%
              </a>
            </th>

            <th className='match-table__first'>
              <a href='#' title='Ability casts per round' className='match-table__stat-name'>
                A/R
              </a>
            </th>
            <th>
              <a href='#' title='Total ultimates' className='match-table__stat-name'>
                Ult
              </a>
            </th>
            <th>
              <a href='#' title='Ultimate kills' className='match-table__stat-name'>
                UK
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <TableData data={el} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatchDetails

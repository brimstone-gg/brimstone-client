import { capitalize } from '@/utils/helpers'

export const ProfileBadge = ({ type }) => {
  if (!type) return null
  return <span className={`badge badge-${type}`}>{capitalize(type)}</span>
}

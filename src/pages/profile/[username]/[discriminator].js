import fetch from 'isomorphic-unfetch'

import Layout from '../../../components/Layout'
import Profile from '../../../components/Profile'

import { API_URL } from '../../../utils/API'

const UserProfile = props => {
  const { profile } = props

  return (
    <Layout>
      <main className='profile-page'>
        <Profile user={profile} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { username, discriminator } = query
  const res = await fetch(`${API_URL}/profile/getUser/${username.toLowerCase()}/${discriminator}`)
  const json = await res.json()

  return {
    props: {
      profile: json.profile
    }
  }
}

export default UserProfile

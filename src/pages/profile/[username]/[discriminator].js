import Layout from '@/components/Layout'
// import Profile from '@/components/Profile'

import { API_URL } from '@/utils/API'

const UserProfile = props => {
  const { profile } = props

  return (
    <Layout>
      <div className='profile-page'>
        <pre className='bg-gray-800 p-4 mt-4'>{JSON.stringify(profile, null, 2)}</pre>
        {/* <Profile user={profile} /> */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { username, discriminator } = query
  const res = await fetch(`${API_URL}/accounts/by-riot-id/americas/${username.toLowerCase()}/${discriminator.toLowerCase()}`)
  const json = await res.json()

  return {
    props: {
      profile: json.data
    }
  }
}

export default UserProfile

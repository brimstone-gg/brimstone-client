import Layout from '../components/Layout'

let playerSearchInput = ''

// Changed the to a class component so it can hold state for API queries. CTA will most likely be searching for a users profile
class App extends React.Component {
  state = {
    userInput: ''
  }
  render() {
    return (
      <Layout>
        <div className='home__container flex flex-col justify-center items-center'>
          <h2>Welcome to</h2>
          <h1 className='text-6xl'>Brimstone.GG</h1>
          <h3 className='opacity-25'>The only place for all things Valorant!</h3>
          <div className='width-10'>
            <input
              className='user-input p-3 w-64 text-black'
              placeholder='Enter players name'
              onInput={e => this.setState({ userInput: e.target.value })}
            ></input>
            <button className='user-input-button p-3'>.GG</button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default App

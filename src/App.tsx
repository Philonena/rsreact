import { Component } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'

class App extends Component {
  state = {
    request: localStorage.getItem('request') || '',
  }

  handleRequestChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      request: ev.target.value,
    })
  }

  handleSearchClick = () => {
    localStorage.setItem('request', this.state.request)
  }

  render() {
    return (
      <>
        <Header
          request={this.state.request}
          handleRequestChange={this.handleRequestChange}
          handleSearchClick={this.handleSearchClick}
        />
      </>
    )
  }
}

export default App

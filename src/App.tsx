import { Component } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import { ChangeStateType, StateType } from './types/types'
import { getMoviesByRequest, getPopularMovies } from './api/moviesApi'

class App extends Component {
  state: StateType = {
    request: localStorage.getItem('request') || '',
    page: 1,
    moviesArray: [],
    isLoading: false,
  }

  handleRequestChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      request: ev.target.value,
    })
  }

  handleOnSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    this.setState({ isLoading: true })
    localStorage.setItem('request', this.state.request)
    if (this.state.request) {
      getMoviesByRequest({
        page: this.state.page,
        request: this.state.request,
        getApiRequest: this.getApiRequest,
      })
    } else
      getPopularMovies({
        getApiRequest: this.getApiRequest,
      })
  }

  getApiRequest = ({ array, isLoad }: ChangeStateType) => {
    this.setState({ moviesArray: array, isLoading: isLoad })
  }

  render() {
    return (
      <>
        <Header
          request={this.state.request}
          handleRequestChange={this.handleRequestChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </>
    )
  }
}

export default App

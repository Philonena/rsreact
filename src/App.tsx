import { Component } from 'react'
import { ChangeStateType, StateType } from './types/types'
import { getMoviesByRequest } from './api/moviesApi'
import Header from './components/header/header'
import Main from './components/main/main'
import Loader from './components/loader/loader'
import './App.css'

class App extends Component {
  state: StateType = {
    request: localStorage.getItem('request') || '',
    arrayRequest: '',
    page: 1,
    moviesArray: [],
    isLoading: false,
    isError: false,
  }

  componentDidMount() {
    getMoviesByRequest({
      page: this.state.page,
      request: this.state.request.trim(),
      getApiRequest: this.getApiRequest,
    })
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

    getMoviesByRequest({
      page: this.state.page,
      request: this.state.request.trim(),
      getApiRequest: this.getApiRequest,
    })
  }

  handleCheckError = () => {
    this.setState({ isError: true })
  }

  getApiRequest = ({ array, isLoad }: ChangeStateType) => {
    this.setState({
      moviesArray: array,
      isLoading: isLoad,
      isError: false,
      arrayRequest: this.state.request.trim(),
    })
  }

  render() {
    return (
      <>
        <Header
          request={this.state.request}
          handleRequestChange={this.handleRequestChange}
          handleOnSubmit={this.handleOnSubmit}
          handleCheckError={this.handleCheckError}
        />

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Main
            moviesArray={this.state.moviesArray}
            isError={this.state.isError}
            arrayRequest={this.state.arrayRequest}
          />
        )}
      </>
    )
  }
}

export default App

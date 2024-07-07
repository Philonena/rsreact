import { Component } from 'react'
import { HeaderPropsType } from '../../types/types'
import './header.css'

class Header extends Component<HeaderPropsType> {
  render() {
    return (
      <header>
        <p className="logo">Movies</p>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            className="input-request"
            type="text"
            name="requestInput"
            value={this.props.request}
            onChange={this.props.handleRequestChange}
          />
          <input type="submit" value="Search" />
        </form>
        <input
          type="button"
          value="Check error"
          onClick={this.props.handleCheckError}
        />
      </header>
    )
  }
}

export default Header

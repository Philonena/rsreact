import { Component } from 'react'

interface Props {
  request: string
  handleRequestChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchClick: () => void
}

class Header extends Component<Props> {
  render() {
    return (
      <header>
        <form onSubmit={this.props.handleSearchClick}>
          <input
            type="text"
            name="requestInput"
            value={this.props.request}
            onChange={this.props.handleRequestChange}
          />
          <input type="submit" value="Search" />
        </form>
      </header>
    )
  }
}

export default Header

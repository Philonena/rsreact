import { Component } from 'react'
import { CardPropsType } from '../../types/types'
import { imgUrl } from '../../constants/constants'
import noPhoto from '/img/no-photo.jpg'
import './movieCard.css'

class MovieCard extends Component<CardPropsType> {
  card = this.props.card
  img = this.card.poster_path ? `${imgUrl}/${this.card.poster_path}` : noPhoto

  render() {
    return (
      <div className="card">
        <img src={this.img} alt={this.card.title} className="card-img" />
        <p className="card-title">{this.card.title}</p>
      </div>
    )
  }
}

export default MovieCard

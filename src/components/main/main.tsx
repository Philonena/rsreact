import { Component } from 'react'
import { MainPropsType } from '../../types/types'
import MovieCard from '../movieCard/movieCard'
import './main.css'

class Main extends Component<MainPropsType> {
  render() {
    if (this.props.isError) throw new Error('I crashed!')

    return (
      <main>
        {this.props.arrayRequest ? (
          <h2 className="title">
            Movies on demand "{this.props.arrayRequest}"
          </h2>
        ) : (
          <h2 className="title">Popular movies</h2>
        )}
        <div className="cards">
          {this.props.moviesArray.length > 0 ? (
            this.props.moviesArray.map((card) => (
              <MovieCard key={card.id} card={card} />
            ))
          ) : (
            <p className="no-movies-text">
              No movies found. Create another request.
            </p>
          )}
        </div>
      </main>
    )
  }
}

export default Main

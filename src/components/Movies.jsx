import {LoadMovies} from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import MovieCard from './MovieCard.jsx'


const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies()),
  }
}

const Movies = (props) => {

	useEffect(() => {
		props.fetchMovies()
		console.log('props', props.movieState)
	}, [])



	return(
		<div className='movie-container'>
			{props.movieState.movies && props.movieState.movies.map((movie) => (
				<MovieCard 
					key={movie.id}
					movie={movie}
				/>
      ))}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
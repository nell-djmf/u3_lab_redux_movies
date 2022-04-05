import React from 'react'
import { useState } from 'react'

const MovieCard = (props) => {


  const [isClicked, setIsClicked] = useState(false)

    return (
      <div className='movie-card'>
        {
          isClicked ? ( 
            <div className='popup-wrapper'>
                <div className='popup-container' >
									<img 
										src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} 
										alt={props.movie.title} 
										style={{width: "200px"}} 
										onClick={()=>setIsClicked(false)}
										className='popup'/>
									<div className='popup-info'>
										<h3>Release Date: { props.movie.release_date } </h3>
										<h3>Popularity: { props.movie.popularity }</h3>
										<h3>Votes: { props.movie.vote_average } </h3>
										<h3>Vote Count: { props.movie.vote_count } </h3>
										<h3>Overview: <p>{ props.movie.overview }</p> </h3>
									</div>
                </div>
              <div className='overlay'></div>
            </div>
          ) : (
            <div></div>
          )
        }
        <div className='movie-card-info'>
            <h2 className='item-name'>{props.movie.title}</h2>
						<br/>
          		<img 
								src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} 
								alt={props.movie.name} 
								style={{width: "300px"}}
								onClick={()=>setIsClicked(true)}  />
            <div className='info'>
            </div>
        </div>
      </div>
    )
}
    

export default MovieCard

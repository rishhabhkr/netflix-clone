import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState()

  //Hook to load row when [X] changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    // TO stop the trailer if playing already
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie.name || '')
        .then((url) => {
          // to store urlparams that'll be further used for video ID
          const urlParams = new URLSearchParams(new URL(url).search)
          //the video id is stored in URL as /watch?v=CJJsuzxX89X to get v='' value and set it in trailer URL
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      {/* poster container */}
      <div className='row__posters'>
        {/* individual Poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row

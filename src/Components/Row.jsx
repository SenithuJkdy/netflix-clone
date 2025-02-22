import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

// const base_url = 'https://image.tmdb.org/t/p/original/';
// https://image.tmdb.org/t/p/w92

function Row({ title,fetchUrl,isLargeRow}) {
  const [movies,setMovies] = useState([]);
  const [trailerUrl , setTrailerUrl] = useState("");

    useEffect(() => { 

    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
      return request;
  }
  fetchData();
  

   // [] runs only once
},[fetchUrl]);
// console.table(movies)
/******************************************************/

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_name || 
        movie?.title || "")
      // movieTrailer(null,{tmdbId: movie.id})
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(() => console.log("Temporarily unavailable"));
    }
  }
 

  return (
    <div className='row'>
        {/* title */}
        <h2>{title}</h2>

        <div className="row__posters">
         {/* several row_posters*/}    
         {movies.map(movie => (
          <img 
          key={movie.id}
          onClick={()=>handleClick()}
          className={`row__poster ${isLargeRow &&  "row__posterLarge" }`} 
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} 
          />
         ))}
        </div>
    

        {trailerUrl && <YouTube videoId={trailerUrl}
        opts={opts} />}
        

    </div>
  );
}

export default Row



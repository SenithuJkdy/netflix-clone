import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../requests';
import './banner.css'

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{ 
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)]
    );
          return request;  
        }
        fetchData();
    },[]);

// console.log(movie);

function truncate(str ,n) {
    return str?.length > n ? str.substr(0, n - 1) + "...":str;
}

  return (
    <header className='banner'
            style={{            
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}          
            >        

        <div className="banner__contents">
            <h1 className='banner__title'>                
                {movie?.title || 
                 movie?.name || 
                 movie?.original_name}
                 {/* reason here used like this
                 some API s don't give always
                 consistent information  */}

                {/* chaining operators >>> movie && movie.title; es11
                feature (2020)*/}
            </h1>

        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>

            <h1 className="banner__description">
            {truncate(movie?.overview,150)}
            </h1>
        
        {/* banner image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
        </div>
        <div className="banner--fadeBottom">


        </div>
    </header>
  )
}

export default Banner
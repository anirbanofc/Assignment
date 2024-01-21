import React, { useState } from 'react'
import css from "../css/output.css"

function Movie() {
  let [inputData, setinputData] = useState("");
  let [movies, setmovies] = useState([]);
  let [loader, Setloader] = useState(false)

  let input = ({ target: { value } }) => {
    setinputData(value)

  }
  function fn() {
    let movieDetails = fetch(`https://www.omdbapi.com/?s=${inputData}&apikey=3c92773c`)

    fetchdata()
    async function fetchdata() {
      Setloader(true)
      try {
        let movieDetails = await fetch(`https://www.omdbapi.com/?s=${inputData}&apikey=3c92773c`)
        movieDetails = await movieDetails.json()
        let { Search } = movieDetails;
        Setloader(false);
        setmovies(ps => {
          return Search
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className='movieDiv'>
      {loader && <span className='loader'></span>}
      <input type="text" placeholder="Enter Movie" onChange={input} />
      <button onClick={fn}>Search</button>
      <div className='maindiv'>

        {movies.map(({ Title, Poster }) => {
          console.log(Title);
          <h1>Title</h1>
          return (
            <div div className='output'>
              <h1>{Title}</h1>
              {Poster === "N/A" ? <img src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" height="250px" /> : <img src={Poster} height="250px" />}
            </div>
          )
        })}</div>
    </div>
  )
}

export default Movie
import React,{ Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title:"The Fellowship of the Ring",
    hours: 2,
    minutes: 58
  },
  {
    title:"The Two Towers",
    hours: 2,
    minutes: 59
  },
  {
    title:"The Return of the King",
    hours: 3,
    minutes: 21
  },
]

class App extends Component{
  render(){
      // map movie data into an array
      const movieComponents= movies.map((movie, index) =>{
        return (
          <Movie
          key={`movie-${index}`}
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
          />
        )
      })
    return (
      <div className="App">
        <h1>The Lord of the Rings: A Trilogy</h1>
        <p>4h 37min</p>
        {movieComponents}

    </div>
    )
  }
}

/* 
  // map movie data into an array
const movieComponents= movies.map(movie =>{
  return (
    <Movie
    title={movie.title}
    hours={movie.hours}
    minutes={movie.minutes}
    />
  )
})

function App() {
return (
  <div className="App">
    <h1>The Lord of the Rings: A Trilogy</h1>
    <p>4h 37min</p>
    {movieComponents}

  </div>
);
}
*/

export default App;
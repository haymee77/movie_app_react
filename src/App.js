import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc');
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, isLoading } = this.state;
    return (
      <section class='container'>
        {isLoading ? (
          <div class='loader'>
            <span class='loader__text'>Loading...</span>
          </div>
        ) : (
          <div class='movies'>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  year={movie.year}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import Movie from './Movie';

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
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? 'Loading...'
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  year={movie.year}
                />
              );
            })}
      </div>
    );
  }
}

export default App;

// https://yts-proxy.now.sh/list-movies.json

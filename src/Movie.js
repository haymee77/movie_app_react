import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, summary, poster, rating, year }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;

import { useLocation } from 'react-router-dom';
import * as API from 'api/api';
import { useEffect, useState } from 'react';
import { StyledLink } from './TrendingMovies.styled';

const TrendingMovies = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    API.getTrendingMovies().then(setTrendingMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMovies;

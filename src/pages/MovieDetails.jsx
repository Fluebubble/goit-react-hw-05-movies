import * as API from 'api/api';
import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { NavItem, Poster } from './MovieDetails.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';
export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log('params = ', params);
  console.log('movie = ', movie);
  useEffect(() => {
    API.getMovieDetailsById(params.movieId).then(setMovie);
  }, [params.movieId]);
  if (!movie) {
    return;
  }
  console.log(location);
  return (
    <>
      {/* <Box display="flex" alignItems='center'> */}
      <NavLink
        to={location.state?.from ?? '/'}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '32px',
          color: 'white',
        }}
      >
        <BiLeftArrowAlt size={20} />
        Go back
      </NavLink>
      {/* </Box> */}
      <Box display="flex" mt={5} gridGap={5}>
        <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Box>
          <h1>{movie.title}</h1>
          <p>User score: {Math.round(movie.popularity)}%</p>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          <h2>More info:</h2>
          <ul>
            <li>
              <NavItem to="cast">Cast</NavItem>
            </li>
            <li>
              <NavItem to="reviews">Reviews</NavItem>
            </li>
          </ul>
        </Box>
      </Box>

      <Outlet />
    </>
  );
};

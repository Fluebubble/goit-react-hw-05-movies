import * as API from 'api/api';
import { Box } from 'components/Box/Box';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { NavItem, Poster } from './MovieDetails.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';
const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    API.getMovieDetailsById(params.movieId).then(setMovie);
  }, [params.movieId]);
  if (!movie) {
    return;
  }
  // console.log(location);
  return (
    <>
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
              <NavItem to="cast" state={{ from: location.state?.from ?? '/' }}>
                Cast
              </NavItem>
            </li>
            <li>
              <NavItem
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </NavItem>
            </li>
          </ul>
        </Box>
      </Box>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

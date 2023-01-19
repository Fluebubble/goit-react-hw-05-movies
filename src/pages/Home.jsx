import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useEffect, useState } from 'react';
import * as API from 'api/api';
import { StyledLink } from '../components/TrendingMovies/TrendingMovies.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return <TrendingMovies />;
  // const [trendingMovies, setTrendingMovies] = useState([]);
  // useEffect(() => {
  //   API.getTrendingMovies().then(setTrendingMovies);
  // }, []);
  // return (
  //   <>
  //     <h1>Trending today</h1>
  //     <ul>
  //       {trendingMovies.map(movie => (
  //         <li key={movie.id}>
  //           <StyledLink to={`movies/${movie.id}`}>{movie.title}</StyledLink>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};

export default Home;

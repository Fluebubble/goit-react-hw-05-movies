import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <input type="text" name="query" />
      <button>Search</button>
      <Outlet />
      {/* <MovieDetails /> */}
    </>
  );
};

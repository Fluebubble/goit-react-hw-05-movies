import { searchMovies } from 'api/api';
import { List, ListItem, Poster } from 'pages/Movies.styled';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === '') {
      return;
    }
    updateQueryString(query);
  };

  useEffect(() => {
    if (!title || title === '') {
      return;
    }
    searchMovies(title).then(setSearchedMovies).catch(console.log);
  }, [title]);

  const updateQueryString = title => {
    const nextParams = title === '' ? {} : { title };
    setSearchParams(nextParams);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="buttom">Search</button>
      </form>
      {searchedMovies && (
        <Suspense fallback={<h1>LOADING...</h1>}>
          <List>
            {searchedMovies.results.map(movie => (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <Poster
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://dummyimage.com/500x750/ffffff/000000&text=No+poster'
                    }
                    alt="movie.title"
                  />
                  {movie.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Suspense>
      )}
    </>
  );
};

export default Movies;

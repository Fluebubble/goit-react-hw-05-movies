import { getMovieCreditsById } from 'api/api';
import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Photo } from './Cast.styled';

export const Cast = () => {
  const params = useParams();
  const [movieCredits, setMovieCredits] = useState(null);
  console.log('MovieCredits =', movieCredits);
  console.log(params);
  useEffect(() => {
    getMovieCreditsById(params.movieId)
      .then(setMovieCredits)
      .catch(console.log);
  }, [params.movieId]);
  if (!movieCredits) {
    return;
  }
  return (
    <>
      <h2>Cast</h2>
      <Box as="ul" display="flex" flexWrap="wrap">
        {movieCredits.map(actor => (
          <Box
            as="li"
            key={actor.id}
            display="flex"
            flexBasis="calc((100% - 20px) / 2)"
            mt={4}
            mb={4}
          >
            <Photo
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={`${actor.character}`}
            />
            <Box ml={4} mr={4}>
              <p>Actor: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

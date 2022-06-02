import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/fetchMovies';
import notfound from '../../images/notfound.png';
import { Img, Ul, List, Title, Char } from './Casts.styled';

export default function Casts() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const url = `https://image.tmdb.org/t/p/w200`;

  useEffect(() => {
    api.fetchFilmCasts(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      <Ul>
        {casts.map(({ id, profile_path, name, character }) => (
          <List key={id}>
            <Img
              src={profile_path ? `${url}${profile_path}` : notfound}
              alt={name}
            />
            <Title>{name}</Title>
            <Char>{character}</Char>
          </List>
        ))}
      </Ul>
    </>
  );
}

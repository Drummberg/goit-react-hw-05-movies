import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/fetchMovies';
import notfound from '../../images/notfound.png';
import { Img, Ul, List, Title, Char } from './Casts.styled';

export default function Casts() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchFilmCasts(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      <Ul>
        {casts.map(({ id, profile_path, name, character }) => {
          const profile = `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <List key={id}>
              <Img src={profile_path ? profile : notfound} alt={name} />
              <Title>{name}</Title>
              <Char>{character}</Char>
            </List>
          );
        })}
      </Ul>
    </>
  );
}

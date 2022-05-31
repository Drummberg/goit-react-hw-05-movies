import React from 'react';
import notfound from '../../images/notfound.png';
import { Img, Ul, List, Title, Char } from './Cast.styled';

const Cast = ({ casts }) => {
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
};

export default Cast;

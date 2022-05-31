import React from 'react';
import { Ul, Img, List, Pi } from './Reviews.styled';
import notfound from '../../images/notfound.png';

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <Ul>
          {reviews.map(item => {
            const avatar = item.author_details.avatar_path.slice(1);
            return (
              <List key={item.id}>
                <Img src={avatar ? avatar : notfound} alt={item.author} />
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </List>
            );
          })}
        </Ul>
      ) : (
        <Pi>We don't have any reviews for this movie!</Pi>
      )}
    </>
  );
};

export default Reviews;

// id, author, content, author_details: { avatar_path

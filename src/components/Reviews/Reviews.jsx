import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/fetchMovies';
import { Ul, Img, List, Pi } from './Reviews.styled';
import notfound from '../../images/notfound.png';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchFilmReviews(movieId).then(setReviews);
  }, [movieId]);

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
}

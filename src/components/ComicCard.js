import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ImageCard from './ImageCard';

const ComicCard = ({ comic }) => {
  const history = useHistory();

  return (
    <ImageCard
      title={comic.title}
      image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      onClick={() => { history.push(`/comics/${comic.id}`); }}
    />
  );
};

ComicCard.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};

export default ComicCard;

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ImageCard from './ImageCard';

const HeroCard = ({ character }) => {
  const history = useHistory();

  return (
    <ImageCard
      title={character.name}
      image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      onClick={() => { history.push(`/hero/${character.id}`); }}
    />
  );
};

HeroCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};

export default HeroCard;

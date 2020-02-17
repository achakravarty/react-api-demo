import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ImageCard from '../../components/ImageCard';

const SeriesCard = ({ series }) => {
  const history = useHistory();

  return (
    <ImageCard
      title={series.title}
      image={`${series.thumbnail.path}.${series.thumbnail.extension}`}
      onClick={() => { history.push(`/series/${series.id}`); }}
    />
  );
};

SeriesCard.propTypes = {
  series: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};

export default SeriesCard;

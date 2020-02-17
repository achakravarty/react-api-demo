import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '../../components/Grid';
import ComicCard from '../../components/ComicCard';

const Series = ({ series }) => (
  <div>
    <Typography gutterBottom variant="h3" component="h2" style={{ marginTop: '2rem' }}>
      <img src={series.image} alt={series.title} style={{ width: 200 }} />
      {' '}
      {series.title}
    </Typography>
    <Divider variant="middle" />
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Comics
    </Typography>
    <Grid items={series.comics} render={(item) => <ComicCard comic={item} />} />
  </div>
);

Series.propTypes = {
  series: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    comics: PropTypes.array,
  }).isRequired,
};

export default Series;

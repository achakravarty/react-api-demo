import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '../../components/Grid';
import SeriesCard from '../../components/SeriesCard';
import withData from './withData';
import withLoader from './withLoader';
import SuperheroService from '../../services/SuperheroService';

const Creator = ({ creator }) => (
  <div>
    <Typography gutterBottom variant="h3" component="h2" style={{ marginTop: '2rem' }}>
      <img src={creator.image} alt={creator.fullName} style={{ width: 200 }} />
      {' '}
      {creator.fullName}
    </Typography>
    <Divider variant="middle" />
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Series
    </Typography>
    <Grid items={creator.series} render={(item) => <SeriesCard series={item} />} />
  </div>
);

Creator.propTypes = {
  creator: PropTypes.shape({
    fullName: PropTypes.string,
    image: PropTypes.string,
    series: PropTypes.array,
  }).isRequired,
};

const loader = (props, { id }) => SuperheroService.getCreator(id);

const mapProps = ({ data }) => ({
  creator: data,
});

export default withData(loader, mapProps)(withLoader(Creator));

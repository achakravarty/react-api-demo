import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '../../components/Grid';
import SuperheroService from '../../services/SuperheroService';
import ComicCard from '../../components/ComicCard';
import withData from './withData';

const Series = ({ seriesDetails }) => (!seriesDetails ? <LinearProgress color="secondary" /> : (
  <div>
    <Typography gutterBottom variant="h3" component="h2" style={{ marginTop: '2rem' }}>
      <img src={seriesDetails.image} alt={seriesDetails.title} style={{ height: 200, width: 200 }} />
      {' '}
      {seriesDetails.title}
    </Typography>
    <Divider variant="middle" />
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Comics
    </Typography>
    <Grid items={seriesDetails.comics} render={(item) => <ComicCard comic={item} />} />
  </div>
));

Series.defaultProps = {
  seriesDetails: null,
};

Series.propTypes = {
  seriesDetails: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    comics: PropTypes.array,
  }),
};

const loadData = (props, state, { id }) => SuperheroService.getSeriesDetails(id);

const mapProps = (props, { data }) => ({
  seriesDetails: data,
});

export default withData(Series)(loadData, mapProps);

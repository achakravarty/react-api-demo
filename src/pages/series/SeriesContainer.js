import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import SuperheroService from '../../services/SuperheroService';
import Series from './Series';

const SeriesContainer = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    SuperheroService.getSeriesDetails(id).then(setSeries);
  }, ['series']);

  return !series ? <LinearProgress color="secondary" /> : <Series series={series} />;
};

export default SeriesContainer;

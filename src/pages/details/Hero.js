import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '../../components/Grid';
import SeriesCard from './SeriesCard';
import SuperheroService from '../../services/SuperheroService';

const Hero = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    SuperheroService.getHero(id).then(setHero);
  }, ['hero']);

  return !hero ? <LinearProgress color="secondary" /> : (
    <div>
      <Typography gutterBottom variant="h3" component="h2" style={{ marginTop: '2rem' }}>
        <img src={hero.image} alt={hero.name} style={{ height: 200, width: 200 }} />
        {' '}
        {hero.name}
      </Typography>

      <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
        Series
      </Typography>
      <Grid items={hero.series} render={(item) => <SeriesCard series={item} />} />
    </div>
  );
};

export default Hero;

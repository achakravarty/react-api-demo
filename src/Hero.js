import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import SuperheroService from './SuperheroService';

const Hero = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    SuperheroService.getHero(id).then(setHero);
  }, ['hero']);

  return !hero ? <LinearProgress color="secondary" /> : (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Series
      </Typography>
    </div>
  );
};

export default Hero;

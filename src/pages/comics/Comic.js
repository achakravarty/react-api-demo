import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '../../components/Grid';
import HeroCard from '../../components/HeroCard';
import Events from './Events';
import Creators from './Creators';
import Stories from './Stories';

const Comic = ({ comic }) => (
  <div>
    <Typography gutterBottom variant="h3" component="h2" style={{ marginTop: '2rem' }}>
      <img src={comic.image} alt={comic.title} style={{ width: 200 }} />
      {' '}
      {comic.title}
    </Typography>
    <Divider variant="middle" />
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Summary
    </Typography>
    <Typography gutterBottom style={{ margin: '2rem 0' }}>
      {comic.description}
    </Typography>
    <Divider variant="middle" />
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Characters
    </Typography>
    <Grid items={comic.characters} render={(item) => <HeroCard character={item} />} />
    <Divider variant="middle" style={{ marginTop: '2rem' }} />
    <Events events={comic.events} />
    <Divider variant="middle" style={{ marginTop: '2rem' }} />
    <Stories stories={comic.stories} />
    <Divider variant="middle" style={{ marginTop: '2rem' }} />
    <Creators creators={comic.creators} />
  </div>
);

Comic.defaultProps = {
  comic: null,
};

Comic.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    creators: PropTypes.array,
    characters: PropTypes.array,
    events: PropTypes.array,
    stories: PropTypes.array,
  }),
};

export default Comic;

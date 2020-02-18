import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import CreatorItemLink from './CreatorItemLink';

const Creators = ({ creators }) => (
  <div>
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Creators
    </Typography>
    <List component="nav" aria-label="secondary mailbox folders">
      {creators.map((creator) => (
        <CreatorItemLink key={creator.id} primary={creator.fullName} to={`/creators/${creator.id}`} />
      ))}
    </List>
  </div>
);

Creators.propTypes = {
  creators: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default Creators;

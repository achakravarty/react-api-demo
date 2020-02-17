import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Events = ({ events }) => (
  <div>
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Events
    </Typography>
    {events.map((event) => (
      <div key={event.id}>
        <Typography gutterBottom variant="h6" component="h2" style={{ marginTop: '2rem' }}>
          {event.title}
        </Typography>
        <Typography gutterBottom>
          {event.description || 'No description available'}
        </Typography>
      </div>
    ))}
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Events;

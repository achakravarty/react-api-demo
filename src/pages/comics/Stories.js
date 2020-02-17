import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Stories = ({ stories }) => (
  <div>
    <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '2rem' }}>
      Stories
    </Typography>
    {stories.map((story) => (
      <div key={story.id}>
        <Typography gutterBottom variant="h6" component="h2" style={{ marginTop: '2rem' }}>
          {story.title}
        </Typography>
        <Typography gutterBottom>
          {story.description || 'No description available'}
        </Typography>
      </div>
    ))}
  </div>
);

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Stories;

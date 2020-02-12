import React from 'react';
import PropTypes from 'prop-types';
import MaterialGrid from '@material-ui/core/Grid';

const Grid = ({ render, items }) => (
  <MaterialGrid
    style={{ marginTop: '1rem' }}
    container
    spacing={3}
    justify="center"
  >
    {items.map((item) => (
      <MaterialGrid item xs={2} key={item.id}>
        {render(item)}
      </MaterialGrid>
    ))}
  </MaterialGrid>
);

Grid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number }),
  ).isRequired,
  render: PropTypes.func.isRequired,
};

export default Grid;

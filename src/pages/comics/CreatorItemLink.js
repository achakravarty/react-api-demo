import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const CreatorItemLink = ({ primary, to }) => {
  const routerLink = useMemo(
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => forwardRef((props, ref) => <Link to={to} ref={ref} {...props} />), [to],
  );

  return (
    <ListItem button component={routerLink}>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

CreatorItemLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CreatorItemLink;

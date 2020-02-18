import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const withLoader = (Component) => (props) => {
  const { isLoading, ...rest } = props;
  return isLoading
    ? <LinearProgress color="secondary" />
    // eslint-disable-next-line react/jsx-props-no-spreading
    : <Component {...rest} />;
};

export default withLoader;

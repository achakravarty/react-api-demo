import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const useDataLoader = (loader, args) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loader(args).then(setData);
  }, ['data']);

  return [data];
};

const DataLoader = ({ loader, render }) => {
  const urlParams = useParams();
  const [data] = useDataLoader(loader, urlParams);

  return !data
    ? <LinearProgress color="secondary" />
    : render(data);
};

DataLoader.propTypes = {
  loader: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default DataLoader;

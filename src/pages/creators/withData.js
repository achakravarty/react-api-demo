import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useDataLoader = (loader, ...args) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loader(...args).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, ['data', 'isLoading']);

  return [data, isLoading];
};

const withData = (loader, mapProps) => (Component) => (props) => {
  const urlParams = useParams();
  const [data, isLoading] = useDataLoader(loader, { ...props }, { ...urlParams });

  const propsToPass = {
    ...props, data, isLoading, ...mapProps({ data, isLoading }, { ...props }),
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (data || isLoading) ? <Component {...propsToPass} /> : null;
};

export default withData;

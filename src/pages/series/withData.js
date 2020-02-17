import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const withData = (Component) => (dataLoader, mapProps) => (props) => {
  const urlParams = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    dataLoader({ ...props }, { ...data }, { ...urlParams }).then(setData);
  }, ['data']);

  const propsToPass = { ...props, ...mapProps({ ...props }, { data }) };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...propsToPass} />;
};

export default withData;

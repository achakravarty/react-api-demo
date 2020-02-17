import React from 'react';
import DataLoader from './DataLoader';
import Comic from './Comic';
import SuperheroService from '../../services/SuperheroService';

const ComicWrapper = () => (
  <DataLoader
    loader={({ id }) => SuperheroService.getComicDetails(id)}
    render={(data) => <Comic comic={data} />}
  />
);

export default ComicWrapper;

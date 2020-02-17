import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '../../components/Grid';
import HeroCard from './HeroCard';
import SuperheroService from '../../services/SuperheroService';

class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    SuperheroService.getHeroes().then((heroes) => {
      this.setState({ characters: heroes });
    });
  }

  loading() {
    const { characters } = this.state;
    if (characters.length === 0) {
      return <LinearProgress color="secondary" />;
    }
    return null;
  }

  render() {
    const { characters } = this.state;
    return this.loading() || (
      <Grid items={characters} render={(item) => <HeroCard character={item} />} />
    );
  }
}

export default Heroes;

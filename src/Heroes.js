import React from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import HeroCard from './HeroCard';
import SuperheroService from './SuperheroService';

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
      <Grid
        style={{ marginTop: '1rem' }}
        container
        spacing={3}
        justify="center"
      >
        {characters.map((character) => (
          <Grid item xs={2} key={character.id}>
            <HeroCard character={character} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Heroes;

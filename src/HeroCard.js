import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const HeroCard = ({ character }) => {
  const history = useHistory();
  return (
    <Card>
      <CardActionArea onClick={() => { history.push(`/hero/${character.id}`); }}>
        <CardMedia
          component="img"
          alt={character.name}
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/hero/${character.id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

HeroCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};

export default HeroCard;

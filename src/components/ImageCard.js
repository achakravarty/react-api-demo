import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const ImageCard = ({
  title, description, image, onClick,
}) => (
  <Card elevation={2}>
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

ImageCard.defaultProps = {
  description: '',
};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;

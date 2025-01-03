import React from 'react';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { RanobeTop } from '../../types/ranobe';
import classes from './RanobeTopCard.module.css';

interface RanobeTopCardProps extends RanobeTop {}

const RanobeTopCard: React.FC<RanobeTopCardProps> = ({ name, rating, image }) => {
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.imageContainer}>
        <CardMedia className={classes.image} component="img" image={image} alt={name} />
        <div
          className={classes.ratingBox}
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <StarIcon className={classes.starIcon} fontSize="small" />
          <Typography className={classes.rating} variant="body2" fontWeight="bold">
            {rating}
          </Typography>
        </div>
      </div>
      <CardContent className={classes.bottom}>
        <Typography className={classes.name} variant="subtitle2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RanobeTopCard;

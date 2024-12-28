import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import classes from './RanobeTopCard.module.css';
import StarIcon from '@mui/icons-material/Star';
import { RanobeTop } from '../../types/ranobe';

const RanobeTopCard = ({ name, rating, image }: RanobeTop) => {
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.image} component="img" image={image} />
      <div
        className={classes.ratingBox}
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        <StarIcon className={classes.starIcon} fontSize="medium" />
        <Typography className={classes.rating} fontSize="medium" fontWeight="bold">
          {rating}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.name} variant="subtitle2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default RanobeTopCard;

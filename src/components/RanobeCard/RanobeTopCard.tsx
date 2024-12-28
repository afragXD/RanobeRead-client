import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import classes from './RanobeTopCard.module.css';
import StarIcon from '@mui/icons-material/Star';
import { RanobeTop } from '../../types/ranobe';
const RanobeTopCard = ({ name, rating, image }: RanobeTop) => {
  return (
    <Card className={classes.card}>
      <div className={classes.image}>
        <CardMedia component="img" image={image} />
        <div className={classes.ratingBox}>
          <StarIcon className={classes.starIcon} fontSize="medium" />
          <Typography className={classes.rating} fontSize="medium" fontWeight="bold">
            {rating}
          </Typography>
        </div>
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

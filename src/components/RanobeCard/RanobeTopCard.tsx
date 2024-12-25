import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import classes from './RanobeTopCard.module.css';
import StarIcon from '@mui/icons-material/Star';
// const Ranobeitem = ({ id, name, description, rating, image, tags }: Ranobe) => {
const RanobeTopCard = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.image}>
        <CardMedia
          component="img"
          image="https://ranobes.com/uploads/posts/2023-07/1690816802_kontinent-2_-neprevzojdennyj-klan-tan.jpeg"
        />
        <div className={classes.ratingBox}>
          <StarIcon className={classes.StarIcon} fontSize="large" />
          <Typography className={classes.rating} fontSize="large" fontWeight="bold">
            9.2
          </Typography>
        </div>
      </div>
      <CardContent>
        <Typography className={classes.name} variant="subtitle2">
          Боевой континент 2. Непревзойдённый Клан Тан
        </Typography>
      </CardContent>
    </Card>
  );
};
// };
export default RanobeTopCard;

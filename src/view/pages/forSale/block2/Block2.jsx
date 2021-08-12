import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route, Link } from 'react-router-dom';
import LearnMore from '../../learnmore/LearnMore';

const useStyles = makeStyles({
    root: {
      maxWidth: 280,
    },
    media: {
      height: 140,
    },
  });
export const Block2 = () => {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://avangardstyle.kg/wp-content/uploads/2021/02/Avangard-CITY-7.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Link exact to="/learnmore">learn more</Link>
        </CardActions>
      </Card>
    )
}

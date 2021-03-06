
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
    learnMore:{
      textDecoration:'none',
      color:'#68ACFD',
    }
  });
export const Block2 = (props) => {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Link className={classes.learnMore} exact to={`/learnmore/${props.id}`}>learn more</Link>
        </CardActions>
      </Card>
    )
}

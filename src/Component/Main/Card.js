import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '1px solid black',
    boxShadow: '5px 10px' 
  },
  media: {
    height: 140,
  },
});

const  MediaCard = (props) => {
  const classes = useStyles();
  const data = JSON.parse(props.results)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.Url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a target='blank' href={data.Weburl}><Button className='readmore' size="small" color="primary">
            Read More
          </Button></a>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
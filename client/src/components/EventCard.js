import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default function MediaCard() {
    const classes = useStyles();
    
    return (
      <>
      <div className="event-container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://placekitten.com/345/140"
            title="Contemplative Reptile"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Event1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              this event is blah blah blah the performer is blah 
              the event time is blah:blah and the date is blah, blah 
              and the event is located at blah 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Save event!
          </Button>
          
        </CardActions>
      </Card>
      </div>
      </>
      )};
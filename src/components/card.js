import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CommentIcon from "@material-ui/icons/Comment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import moment from "moment";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // width: 300,
    margin: "3rem",
  },
  media: {
    // height: "4rem",
    // width:"100%",
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  description: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default function PostCard(
  
  {
  author,
  category,
  comment_count,
  created_date,
  image,
  description,
  like_count,
  postview_count,
  title,
  updated_date,
  slug,
  onChange,
}

) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = event => {
    onchange(event.target.value);
}

  return (
    <Link to="Detail">
      <Card className={classes.root}
      onChange= {handleChange}
      // onClick={()=> props.onDetail(slug)}
      slug={slug}
      >
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={title}
          subheader={moment(created_date).format("YYYY-MM-DD hh:mm:ss a")}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            multiline
            rows="2"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CommentIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {comment_count}
          </Typography>
          <IconButton aria-label="share">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {like_count}
          </Typography>
          <IconButton aria-label="share">
            <VisibilityIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {postview_count}
          </Typography>
          {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
        </CardActions>
      </Card>
    </Link>
  );
}

PostCard.propTypes = {
  // id: PropTypes.string.isRequired,
  // userImage: PropTypes.string,
  // userName: PropTypes.string,
  // userEmail: PropTypes.string,
  onChange: PropTypes.func,
  author: PropTypes.string,
  category: PropTypes.string,
  comment_count: PropTypes.string,
  created_date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  like_count: PropTypes.string,
  postview_count: PropTypes.string,
  title: PropTypes.string,
  updated_date: PropTypes.string,
  slug: PropTypes.string,
};

// author: "furkan"
// category: "General"
// comment_count: 0
// created_date: "2021-01-28T15:18:57.162006Z"
// description: "denem1 denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1denem1"
// image: "https://miro.medium.com/max/875/1*KwSbyYyqaukruQVofd1HTQ.jpeg"
// like_count: 0
// postview_count: 0
// slug: "furkan-denem1"
// title: "denem1"
// updated_date: "2021-01-28T15:18:57.162047Z"

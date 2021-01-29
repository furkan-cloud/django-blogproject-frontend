import React from "react";
import PostCard from "./card";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid, Container } from "@material-ui/core";
// import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginLeft: "5rem",
    marginRight: "5rem",
    flexDirection: "row",
    // verticalAlign: "center",
    // alignContent: "center",
    // justifyContent: "center",
    // alignItems: "center",
    borderColor: "primary.main",
    border: 5,
    // borderRadius: 20,
    // borderBlockWidth: 5,
    // borderBlockColor: "blue",
  },
  // root: {
  //   maxWidth: 345,
  // },
  // media: {
  //   height: 0,
  //   paddingTop: "56.25%", // 16:9
  // },
  // expand: {
  //   transform: "rotate(0deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: "rotate(180deg)",
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));

function CardList(props) {
  const classes = useStyles();
  const axios = require("axios");
  const [articleList, setArticleList] = React.useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://djangorest-blog.herokuapp.com/"
      );
      console.log(response.data.results);
      setArticleList(response?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Container className={classes.wrapper}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {articleList?.map((a) => {
              return (
                <PostCard
                  author={a.author}
                  category={a.category}
                  comment_count={a.comment_count}
                  created_date={a.created_date}
                  description={a.description}
                  image={a.image}
                  like_count={a.like_count}
                  postview_count={a.postview_count}
                  title={a.title}
                  updated_date={a.updated_date}
                  slug={a.slug}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CardList;


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

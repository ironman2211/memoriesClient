import React from "react";
import useStyles from "./style.js";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./post/post.js";
import { useSelector } from "react-redux";
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.Posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress></CircularProgress>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

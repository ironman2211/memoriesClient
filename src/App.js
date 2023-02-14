import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./asets/memories.png";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import useStyles from "./style.js";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className={classes.heading}
          variant="h2"
          alignItems="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          height="45px"
          alt="memories"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm="7">
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm="4">
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

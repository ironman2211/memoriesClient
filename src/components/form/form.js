import React, { useState } from "react";
import useStyles from "./style.js";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBAse from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts.js";
function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {
    console.log("clear");
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">Creating a memory...</Typography>
        <TextField
          name="creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          label="Creator"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          fullWidth
          value={postData.title}
          label="Title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          fullWidth
          value={postData.message}
          label="Message"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          label="Tags"
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBAse
            type="files"
            multiple={false}
            onDone={({ base64 }) =>
            setPostData({ ...postData, selectFile: base64 })
            }
          ></FileBAse>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {" "}
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          type="submit"
          fullWidth
        >
          {" "}
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;

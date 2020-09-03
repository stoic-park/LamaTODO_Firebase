import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// firebase
import db from "./firebase";

function Todo(props) {
  return (
    // <div>
    //   <li>{props.todo}</li>
    // </div>
    <List className="todolist">
      <ListItem>
        <ListItemAvatar>
          {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
        </ListItemAvatar>

        <ListItemText
          primary={props.todo.todo}
          secondary="마감 기한"
        ></ListItemText>
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;

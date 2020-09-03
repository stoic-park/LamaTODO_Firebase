import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon,
} from "@material-ui/core";

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

        <ListItemText primary={props.todo} secondary="마감 기한"></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;

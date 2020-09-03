import React, { useState } from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon,
  Button,
  Modal,
  Input,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

// firebase
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  // hooks & Modal 창을 사용해서 수정기능 추가하기
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  // Material -> styles
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  // 수정 함수
  const updateTodo = () => {
    // 새로운 입력 값으로 업데이트
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>fix it!</h1>
          <Input
            // 기존 값도 나타내주자
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={(e) => updateTodo()}>update</Button>
        </div>
      </Modal>

      <List className="todolist-entry">
        <ListItem className="todo-inputbox">
          <ListItemAvatar>
            {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
          </ListItemAvatar>

          <ListItemText
            primary={props.todo.todo}
            // secondary="마감 기한"
          ></ListItemText>
        </ListItem>
        <Button className="update-button" onClick={(e) => setOpen(true)}>
          수정
        </Button>
        <div className="delete-button">
          <DeleteForeverIcon
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </div>
      </List>
    </>
  );
}

export default Todo;

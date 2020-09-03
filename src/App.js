import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
//
// import Button from "@material-ui/core/Button";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

// import firebase db
import db from "./firebase";
import firebase from "firebase";

function App() {
  // state
  // const [todos, setTodos] = useState(["알고리즘 풀기", "책 읽기"]);
  // const [input, setInput] = useState("");
  // console.log(input);
  // console.log(todos);

  //! firebase store
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // 여기에 코드..! app.js 가 불러와졌을 때 실행될 코드
    //! firestore에서 데이터 가져오기!
    //! collection - onSnapshot!
    // orderBy이용해서 내림차순 정렬하기
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todo));
        // setTodos(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  // 버튼 클릭시 todos에 state 추가
  const addTodo = (event) => {
    // console.log("🍎");

    // 이거 해주지 않으면.. 어찌 되는지 알지?
    // submit 과 같은 고유 동작을 했을 때...새로고침이 되버리는데..
    // 이벤트 전파를 중단
    //! will stop the refresh
    event.preventDefault();

    //! firestore에 데이터 추가하기!
    //! collection - add
    // very simple code..!
    db.collection("todos").add({
      todo: input,
      // 시간
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos(input); // =>  error 발생!!
    // setTodos([...todos, input]);
    setInput("");
    // console.log(todos);
  };

  return (
    <div className="App">
      <div className="appContainer">
        <div className="appTitle">
          <h1>Lama TODO?</h1>
        </div>

        <form className="appInput">
          {/* <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        /> */}

          <FormControl>
            <InputLabel>입력하시오..!</InputLabel>
            <Input
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </FormControl>

          {/* <button type="submit" onClick={addTodo}>
          add
        </button> */}
          <div className="add-button">
            <Button
              disabled={!input} //! 인풋값이 없을 경우 기능이 작동하지 않도록!
              type="submit"
              onClick={addTodo}
              variant="contained"
              color="primary"
            >
              add
            </Button>
          </div>
        </form>

        <div className="todoList">
          <ul>
            {/* map 사용해서 todo 뿌리기 */}
            {todos.map((todo) => (
              // <li>{todo}</li>
              <Todo todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

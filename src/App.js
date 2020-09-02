import React, { useState } from "react";
import "./App.css";

//
// import Button from "@material-ui/core/Button";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  // state
  const [todos, setTodos] = useState(["알고리즘 풀기", "책 읽기"]);
  const [input, setInput] = useState("");
  // console.log(input);
  // console.log(todos);

  // 버튼 클릭시 todos에 state 추가
  const addTodo = (event) => {
    // console.log("🍎");

    // 이거 해주지 않으면.. 어찌 되는지 알지?
    // submit 과 같은 고유 동작을 했을 때...새로고침이 되버리는데..
    // 이벤트 전파를 중단
    //! will stop the refresh
    event.preventDefault();

    // setTodos(input); // =>  error 발생!!
    setTodos([...todos, input]);
    setInput("");
    // console.log(todos);
  };

  return (
    <div className="App">
      <h1>Lama TODO🚀?</h1>
      <form>
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
        <Button
          disabled={!input} //! 인풋값이 없을 경우 기능이 작동하지 않도록!
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          add
        </Button>
      </form>

      <ul>
        {/* map 사용해서 todo 뿌리기 */}
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

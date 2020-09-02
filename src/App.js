import React, { useState } from "react";
import "./App.css";

function App() {
  // state
  const [todos, setTodos] = useState(["알고리즘 풀기", "책 읽기"]);
  const [input, setInput] = useState("");
  // console.log(input);

  // 버튼 클릭시 todos에 state 추가
  const addTodo = (event) => {
    // console.log("🍎");
    // setTodos(input); // =>  error 발생!!
    setTodos([...todos, input]);
    // console.log(todos);
  };

  return (
    <div className="App">
      <h1>Lama TODO🚀?</h1>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addTodo}>add</button>

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

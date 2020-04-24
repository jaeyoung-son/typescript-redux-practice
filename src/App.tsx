import React from 'react';
import Counter from './component/counter';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;

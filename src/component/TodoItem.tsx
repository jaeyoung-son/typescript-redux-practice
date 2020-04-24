import React from 'react';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li>
      <span onClick={onToggle}> {todo.text} </span>
      <span onClick={onRemove}>(x)</span>
    </li>
  );
}

export default TodoItem;

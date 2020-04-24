import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { number } from 'prop-types';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO)<string>();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();

export const removeTodo = createAction(REMOVE_TODO)<number>();

// 액션들의 타입스크립트 타입 준비
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우자', done: true },
  { id: 2, text: '타입스크립트와 리덕스 같이쓰자', done: true },
  { id: 3, text: '투두리스트 만들자', done: true }
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

export default todos;

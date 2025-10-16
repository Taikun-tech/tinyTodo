import {useState} from 'react';
import TodoList from './components/todoList';

export type Todo = {
  id: string;
  text: string;
  date: Date;
}
export type TodoList = Todo[];


export default function App() {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoList>([]);

  /**
   * Todo追加
   */
  function addTodo() {
    setTodoList([...todoList,
    {
      id: 'TD' + Math.floor((Math.random() * 10000)).toString(5),
      text: todo,
      date: new Date()
    }]
    );
  }

  /**
   * Todo削除
   * @param id Todoのid
   */
  function deleteTodo(id: string) {
    const newTodoList = todoList.filter((todo: Todo) =>
      todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <input type="text" value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
        placeholder='Please write a Todo'></input>
      <button onClick={addTodo}>Add</button>
      <TodoList todoList={todoList} onClick={deleteTodo} />
    </>
  );
}
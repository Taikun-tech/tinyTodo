import type { Todo } from '../App.tsx';
import type { TodoList } from '../App.tsx';

type Props = {
  todoList: TodoList;                     // Todo配列
  onClick: (id:string) => void;     // 引数にidを取る関数
};


export default function TodoList({ todoList,onClick }:Props) {

    return (
        <>
        <ul>
            {todoList.map((todo:Todo) => (
                <li key={todo.id}>
                <span>{todo.id}</span>{'/ '}
                <span>{todo.text}</span>
                <button onClick={() => onClick(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    );
}
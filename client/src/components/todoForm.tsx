interface TodoFormProps {
    todo: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoForm({ todo,onChange }:TodoFormProps){

    return (
        <>
        <input type="text" value={todo}
            onChange={onChange}
            placeholder='Please write a Todo'></input>
        
        </>
    );
}
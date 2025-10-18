interface AddButtonProps  {
  onClick: () => void;     // 引数なしの関数
}

export default function AddButton({onClick}:AddButtonProps) {
    return (
        <>
            <button onClick={onClick}>Add</button>
        </>
    );
};
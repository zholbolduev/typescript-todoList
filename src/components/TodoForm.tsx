import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyUpHandle = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        style={{ color: "black" }}
        onKeyUp={keyUpHandle}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;

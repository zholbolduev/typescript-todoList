import React from "react";
import ITodo from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};
const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return (
      <p
        className="center"
        style={{ color: "white", fontSize: "2rem", fontWeight: 700 }}
      >
        {" "}
        Пока дел нет
      </p>
    );
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          console.log(todo);
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input type="checkbox" onChange={onToggle.bind(null, todo.id)} />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

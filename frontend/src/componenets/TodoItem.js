import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li key={todo.id}>
            <span 
                onClick={() => toggleTodo(todo.id)} 
                style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;

import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        // Load todos from localStorage
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    
        // Fetch todos from API
        fetch("https://dummyjson.com/todos")
            .then(response => response.json())
            .then(data => {
                setTodos(prevTodos => {
                    const newTodos = data.todos.map(todo => ({
                        id: `api-${todo.id}`, // Prefix the API id to avoid collision
                        text: todo.todo,
                        completed: todo.completed
                    }));
    
                    // Merge new todos with previous ones, avoiding duplicates
                    return [
                        ...prevTodos,
                        ...newTodos.filter(newTodo => !prevTodos.some(todo => todo.id === newTodo.id))
                    ];
                });
            });
    }, []); 
    
    // Save to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Filter todos based on the selected filter
    const filteredTodos = todos.filter(todo => 
        filter === "all" ? true : 
        filter === "completed" ? todo.completed : 
        !todo.completed
    );

    return (
        <div className="container">
            <h1 className="main-heading">Todo App</h1>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
            />
        </div>
    );
};


export default TodoApp;

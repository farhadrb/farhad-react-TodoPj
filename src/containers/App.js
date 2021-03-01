import React, { useState } from 'react';
import NewTask from '../components/newTask';
import TodoContext from '../context/TodoContext';
import Todos from "../components/todos";

const App = () => {
    const [getTodos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState("");
    
    console.log(getTodos)

    const hanldeWriteTodo = event=>{
        setTodo(event.target.value)
    }


    const handleNewTodo = ()=>{
        const todos = [...getTodos]
        const todo = {
            id:Math.floor(Math.random()*1000),
            text:getTodo,
            completed:false
        }
        if(getTodo !== "" && getTodo !== " "){
            todos.push(todo);
            setTodos(todos);
            setTodo("")
        }
    }


    const handleDeleteTodo = id=>{
        const todos = [...getTodos];
        const filterTodos = todos.filter(t=>t.id !== id);
        setTodos(filterTodos)
    }


    const handleCompletedTodo = id=>{
        const todos = [...getTodos]
        const todoIndex = todos.findIndex(t => t.id === id);
        const todo = todos[todoIndex]
        todo.completed = !todo.completed
        todos[todoIndex] = todo
        setTodos(todos)
        }
    return (
        <TodoContext.Provider value={{todos: getTodos,hanldeWriteTodo:hanldeWriteTodo,handleNewTodo:handleNewTodo,todo:getTodo,handleDeleteTodo:handleDeleteTodo,handleCompletedTodo:handleCompletedTodo}}>
            <div className="d-flex justify-content-center app">
                <Todos/>
                <NewTask />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
import React,{useState} from 'react'
import TodoContext from '../context/TodoContext';


const GlobalState = (props) => {

    const [getTodos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState("");



     



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
            {props.children}
        </TodoContext.Provider>
     );
}
 
export default GlobalState;
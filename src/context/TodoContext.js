import { createContext } from "react";


const TodoContext = createContext({
    todos:[],
    todo:"",
    hanldeWriteTodo:()=>{},
    handleNewTodo:()=>{},
    handleDeleteTodo:()=>{},
    handleCompletedTodo:()=>{}
})

export default TodoContext;
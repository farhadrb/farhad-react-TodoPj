import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';
import Todo from './todo';




const Todos = () => {
    const context = useContext(TodoContext)
    const { todos, handleDeleteTodo,handleCompletedTodo} = context

    return (
        <div className="todos pt-2 pr-2">
            {todos.length > 0 ? (
                <div className="text-right">
                    {todos.map(t => (
                        <Todo key={t.id} text={t.text} isCompleted={t.completed} deleted={()=>handleDeleteTodo(t.id)} completed={()=>handleCompletedTodo(t.id)} />
                    ))}
                </div>
            ) : (
                    <div className="alert alert-light mt-3 w-75 mx-auto">
                        <p className="text-center">
                            هیچ کاری برای امروز ثبت نشده 
                         </p>
                    </div>
                )}
        </div>
    );
}

export default Todos;

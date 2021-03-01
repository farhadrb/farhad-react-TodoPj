import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';


const Todo = ({ text, isCompleted,deleted,completed}) => {
    const context = useContext(TodoContext);

    return (
        <div className={`todo-child pr-2 ${isCompleted ? "after" : "" }`}>
            <p>{isCompleted ? <del>{text}</del> : text}</p>
            <div className="btn-parent pl-2">
                <button className="btn btn-danger button-btn" onClick={deleted}><i className="tf-ion-ios-trash"></i></button>
                <button className="btn btn-success button-btn" onClick={completed}><i className="tf-ion-android-done"></i></button>
            </div>
        </div>
    );
}

export default Todo;
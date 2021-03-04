import React from 'react'


const Todo = ({ text, isCompleted,deleted,completed}) => {

    return (
        <div className={`todo-child pr-2 ${isCompleted ? "after" : "" }`}>
            <p clasname="text-overflow">{isCompleted ? <del>{text}</del> : text}</p>
            <div className="btn-parent pl-2">
                <button className="btn btn-danger button-btn" onClick={deleted}><i className="tf-ion-ios-trash"></i></button>
                <button className="btn btn-success button-btn" onClick={completed}><i className="tf-ion-android-done"></i></button>
            </div>
        </div>
    );
}

export default Todo;
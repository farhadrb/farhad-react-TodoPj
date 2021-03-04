import React,{useContext} from 'react'
import TodoContext from '../context/TodoContext';




const NewTask = () => {
    const context = useContext(TodoContext)
    return ( 
        <div className="newTask">
            <form className="form-inline" onSubmit={event=>{event.preventDefault()}}>
                <div className="input-group">
                    <input type="text" placeholder="شخص جدید" value={context.todo} onChange={context.hanldeWriteTodo} />
                </div>
                <div className="input-group-append">
                    <button type="submit" className="tf-ion-android-person-add" onClick={context.handleNewTodo}></button>
                </div>
            </form>
           
        </div>
     );
}
 
export default NewTask;
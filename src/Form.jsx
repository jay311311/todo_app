import React, {useContext, useRef} from 'react'
import {TodoContext} from "./App"
import  "./Formstyle.css"
const Form = ()=> {
    const {addTodo} = useContext(TodoContext)
    const inputRef = useRef(false)
    const addTodoData = (event) => {
        event.preventDefault();
        addTodo(inputRef.current.value)
    }

    return (
        <div>
            <form action="" className="todo_box" >
                <input className="todo_write" type="text"  name="" ref={inputRef} placeholder="write your to-do"/>
                <button className="todo_submit" onClick={addTodoData}>할 일 추가</button>
            </form>
        </div>
    )
}

export default Form



import React, {useContext, useRef} from 'react'
import {TodoContext} from "./App"

const Form = ()=> {
    

    const {addTodo} = useContext(TodoContext)
    const inputRef = useRef(false)
    const addTodoData = (event) => {
        event.preventDefault();
        addTodo(inputRef.current.value)
    }

    return (
        <div>
            <form action="" >
                <input type="text" name="" ref={inputRef}/>
                <button onClick={addTodoData}>할 일 추가</button>
            </form>
        </div>
    )
}

export default Form



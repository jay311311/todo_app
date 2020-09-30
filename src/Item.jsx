import React from 'react'

const item = ({todo,changeTodoStatus}) => {

    const handleClick=(event)=>{
        /* const id = event.target.dataset.id; */
        const id = event.target.id;
        console.log(id)
        changeTodoStatus(id)
    }

    const ItemClassName = todo.status === "done" ? "done" :" "

    return (
        <li   id={todo.id} onClick={handleClick} className={ItemClassName}>
            {todo.title}
        </li>
    )
}

export default item
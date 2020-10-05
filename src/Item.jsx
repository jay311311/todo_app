import React from 'react'
import styled from "styled-components"

const Li = styled.li`
font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    line-height: 20px;
    text-align: center;
    color: rgba(255, 255, 255, .9);
    font-size: 1rem;
    font-family: 'Nanum Gothic', sans-serif;
`

const item = ({todo,changeTodoStatus}) => {

    const handleClick=(event)=>{
        const id = event.target.id;
        console.log(id)
        changeTodoStatus(id)
    }

    const ItemClassName = todo.status === "done" ? "done" :" "

    return (
        <Li   id={todo.id} onClick={handleClick} className={ItemClassName}>
            {todo.title}
        </Li>
    )
}

export default item
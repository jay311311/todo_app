import React,{useContext} from 'react'
import Item from "./Item"
import {TodoContext} from "./App"

const List = () => {
    const {todos,changeTodoStatus} = useContext(TodoContext)

        const todoList = todos.map( (todo) => 
                <Item 
                    key={todo.id} 
                    todo ={todo} 
                    changeTodoStatus={changeTodoStatus}/> )
    return (
       <ul>{todoList}</ul>
    )
}

export default List;

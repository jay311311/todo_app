import React, { useState, useEffect} from 'react'
import List from"./List";
import Form from "./Form"
import Header from "./Header"




export const TodoContext = React.createContext();

const App = ()=>{
  const [todos, setTodos] = useState([])



  const addTodo =(newTodo)=>{
    setTodos([...todos, { "title" : newTodo, "id" : todos.length+1, "status" : "todo"}])

  }

  const changeTodoStatus = (id) =>{
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) {
        if(todo.status === "todo") {todo.status = "done"}
        else{ todo.status = "done"}
          }
          return todo
        }
      )
     setTodos(updateTodos)
  }

  useEffect(()=>{
    console.log("새로운 렌더링",todos);
  }, [todos])



  return(
    <TodoContext.Provider value={{todos,addTodo,changeTodoStatus}}>
    <Header />
    <Form />
    <List />

    </TodoContext.Provider>
  )
}

export default App
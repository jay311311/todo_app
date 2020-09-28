import React, {Conponent, useState} from 'react'
import List from"./List";


const App = ()=>{
  const [todos, setTodos] = useState(["js공부"])
  const [newTodo, setNewTodo] = useState()

  const changeInputData=(event)=>{
    setNewTodo(event.target.value)
    //newTodo에 event.target.value 값을 넣음
  }
 
  const addTodo =(event)=>{
    event.preventDefault()
    setTodos([...todos, newTodo])
//원래 있던 배열(todos)에 새로 받은 값(newTodo)을 넣음
  }
  return(
    <>
    <h1>todo application</h1>

    <form action="" >
      <input type="text" name=""  onChange={changeInputData}/>
      <button onClick={addTodo}>할 일 추가</button>
    </form>

    <List todos={todos} />
    </>
  )
}

export default App
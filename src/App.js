import React, { useState, useEffect} from 'react'
import List from"./List";
import Form from "./Form"
import Header from "./Header"
/* import useFetch from "./useFetch.js" */


export const TodoContext = React.createContext();

const App = ()=>{
  const [todos, setTodos] = useState([])

  //useState는 state를 compoenet안에서 관리

/* const loading = useFetch(setTodos, "http://yts-proxy.now.sh/list_movies.json?sort_by=rating")
 */

  const addTodo =(newTodo)=>{
    setTodos([...todos, { "title" : newTodo, "id" : todos.length+1, "status" : "todo"}])
//원래 있던 배열(todos)에 새로 받은 값(newTodo)을 넣음
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
//[]인자에 변화가 생길때마다 렌더링됨
//use effect는 compoenentdidmount나 componentdidupdate 같은 라이프 사이클 같은 역할(후속처리)


  return(
    <TodoContext.Provider value={{todos,addTodo,changeTodoStatus}}>
  
    <Header />
    <Form />
    <List /* loading={loading}  */ />

    </TodoContext.Provider>
  )
}

export default App
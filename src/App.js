import React, { useState, useEffect} from 'react'
import List from"./List";


const App = ()=>{
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState()
  //useState는 state를 compoenet안에서 관리
  const [loading,setLoading] = useState(false)
  //loading data를 보여주기 위한

  const changeInputData=(event)=>{
    setNewTodo(event.target.value)
    //newTodo에 event.target.value 값을 넣음
  }
 
  const addTodo =(event)=>{
    event.preventDefault()
    setTodos([...todos, newTodo])
//원래 있던 배열(todos)에 새로 받은 값(newTodo)을 넣음
  }

  const fetchInitialData = async() =>{
    setLoading(true)
    const response = await fetch("http://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    const{data:{ movies:InitialData} }= await response.json();
    setTodos(InitialData)
    //setTodos에 InitialData추가
    setLoading(false)
  }

  useEffect(()=>{
    console.log("새로운 렌더링",todos);
  }, [todos])
//[]인자에 변화가 생길때마다 렌더링됨
//use effect는 compoenentdidmount나 componentdidupdate 같은 라이프 사이클 같은 역할(후속처리)

useEffect(()=>{
  fetchInitialData()
},[])
//비동기에대한적절한 처리를위해 콜백함수안에 직접넣지x
//두번째 인자 []가 없으면 계속 반복적인 렌더링(콜백)
  return(
    <>
    <h1>todo application</h1>

    <form action="" >
      <input type="text" name=""  onChange={changeInputData}/>
      <button onClick={addTodo}>할 일 추가</button>
    </form>

    <List todos={todos} loading={loading}/>
    </>
  )
}

export default App
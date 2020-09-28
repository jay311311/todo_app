import  {useState,useEffect} from "react"

const useFetch =(callback,url) =>{
    const [loading,setLoading] = useState(false)
    //loading data를 보여주기 위한
  
    const fetchInitialData = async() =>{
      setLoading(true)
      const response = await fetch(url)
      const {data:{ movies:InitialData} } = await response.json();
      callback(InitialData)
      //setTodos에 InitialData추가
      setLoading(false)
    }
  
    useEffect( ()=>{
      
      fetchInitialData();
    },[])
    //비동기에대한적절한 처리를위해 콜백함수안에 직접넣지x
    //두번째 인자 []가 없으면 계속 반복적인 렌더링(콜백)
   

    return loading
  }
  //재사용성을위해 로직을 분리
  //custom hook 에서는 같은 use들을 같은 라이프 사이클에 돌린다

  export default useFetch
import React, {useContext} from "react";
import styled from "styled-components"
import {TodoContext} from "./App"


const SubTitle = styled.div`
margin-bottom:1rem;
`;

const Head = () => {
     const {todos} = useContext(TodoContext)
//context로 받을때는 ()안에 props를 넣지 않는다.
    return(
                    <div>
                        <h1>todo application</h1>
                        <SubTitle>할 일이 {todos.filter( v => v.status ==="todo").length} 개 남았습니다</SubTitle>
                    </div>
                )

}

export default Head
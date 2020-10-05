import React, {useContext} from "react";
import styled from "styled-components"
import {TodoContext} from "./App"

const Title = styled.div`
color:#1e272e;
@media all and (max-width: 767px) {font-size:1.5rem;}
margin-bottom:30px;
font-size:2rem;
font-family: 'Sansita Swashed', cursive;
text-align:center;
`
const SubTitle = styled.div`
color:#2d3436;
margin-bottom:1rem;
text-align:center;
font-family: 'Nanum Gothic', sans-serif;
`;

const Head = () => {
     const {todos} = useContext(TodoContext)

    return(
            <div>
                <Title>Todo Application</Title>
                <SubTitle>할 일이 {todos.filter( v => v.status ==="todo").length} 개 남았습니다</SubTitle>
            </div>
                )

}

export default Head
import React from "react";
import styled from "styled-components"

const SubTitle = styled.div`
margin-bottom:1rem;
`;

const Head = ({todos}) => {
    return(
        <div>
            <h1>todo application</h1>
            <SubTitle>할 일이 {todos.filter( v => v.status ==="todo").length} 개 남았습니다</SubTitle>
        </div>
        )
        
}

export default Head
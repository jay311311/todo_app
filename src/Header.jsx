import React from "react";
import styled from "styled-components"
import {TodoContext} from "./App"


const SubTitle = styled.div`
margin-bottom:1rem;
`;

const Head = ({todos}) => {
    return(
        
            <TodoContext.Consumer>
              {  ({todos}) => (
                    <div>
                        <h1>todo application</h1>
                        <SubTitle>할 일이 {todos.filter( v => v.status ==="todo").length} 개 남았습니다</SubTitle>
                    </div>
                )}
            </TodoContext.Consumer>
           
        
        )
        
}

export default Head
import React from 'react';
import LogIn from './Login';


const Auth = (props) => {
    return (
        <div>
            <LogIn updateToken={props.updateToken}/>
        </div>      
    )
}

export default Auth; 

// const backdrop = styled.div `
//   background: grey;

// `;
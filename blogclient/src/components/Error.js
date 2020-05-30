import React, { useContext } from 'react';
import styled, {keyframes} from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in';
import {BlogContext} from '../context/context'


const Error = (props) => {

    let {onReload} = useContext(BlogContext)


   if(window.location.reload){
    console.log("inside if reload in error")
    onReload()
}

        const handleSignIn = () => {
            props.history.push('/signin')
        }

        const handleSignUp = () => {
            props.history.push('/signup')
        }

        const Bounce = styled.div`animation: 4s ${keyframes`${fadeIn}`} infinite`

    return (
        <div className='Error-container'>
            <div className='error-box'>
            <p>
            <Bounce>PAGE NOT FOUND! </Bounce> 
            </p>
            <button className='err-signin-signup' onClick={handleSignIn}> SignIn </button>
            <button className='err-signin-signup' onClick={handleSignUp}> SignUp </button>
            </div>
        </div>
    );
}
 
export default Error;
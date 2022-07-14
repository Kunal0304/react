import { Button } from '@mui/material'
import { auth } from '../../firebase.js'
import React from 'react'
import { provider } from '../../firebase'
import "./login.css"
import { useStateValue } from '../../context/Stateprovider.jsx'
import { actionTypes } from '../../context/Reducer.js'

const Login = () => {
    const [{ }, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider).then(res => dispatch({
            type: actionTypes.SET_USER,
            user: res.user
        })).catch(err => alert(err.message))

    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png' alt=''></img>
                <div className='login__text'>
                    <h1>sign in to whatsapp</h1>
                    <Button className='login__button' type='submit' onClick={signIn}>
                        Sign In With Google
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Login
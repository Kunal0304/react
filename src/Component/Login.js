import React, { useCallback, useState } from 'react'
import Demo02 from './Demo02'
import Demo1 from './Demo1'


function Login() {
	const [home,setHome]=useState('helloo Home')
	const [about,setAbout]=useState('helloo About')


	const Func01=useCallback(()=> {
		setHome("hello Home update")
	},[home])
	const Func02=useCallback(()=> {
		setAbout("hello About update")
	},[about])



  return (
	<div>Login
		{/* <button onClick={aa}>click here01 </button> */}
		{/* <p>{home}</p> */}
		<Demo1 n={home}/>
		<button onClick={Func01}>click home</button>
		{/* <p>{about}</p> */}
		<Demo02 ne={about}/>
		<button onClick={Func02}>click about</button>
	</div>
  )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
    const [name , setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const submitformhandler = (e)=>{
        e.preventDefault()
        console.log({
            name,
            email,
            password,
        })
     if(name && email && password){
      const data = { name, email, password };
      localStorage.setItem('userData', JSON.stringify(data));
        navigate('/')
     }else{
        alert("please fill all fields")
     }
    }

  return (
<main className="form-signin w-25 m-auto text-center mt-5 border p-4 rounded bg-dark">
  <form onSubmit={submitformhandler}>
    <img className="mb-4 text-center" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt width={72} height={57} />
    <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>
    <div className="form-floating ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name" onChange={(e)=>setName(e.target.value)} />
      <label htmlFor="floatingInput text-white">Name</label>
    </div>
    <div className="form-floating my-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor="floatingInput text-white">Email address</label>
    </div>
    <div className="form-floating my-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <label htmlFor="floatingPassword text-white">Password</label>
    </div>
 
    <button className="btn btn-primary w-100 py-2 text-white" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary text-white">© 2017–2024</p>
  </form>
</main>

  )
}

export default Signup

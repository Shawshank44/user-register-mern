import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const[data,setdata] = useState({
        name : "",
        email : "",
        password : "",
    })
    // const [error,seterror] = useState('')
    const navigate = useNavigate()

    const HandelChange = ({currentTarget : input})=>{
        setdata({...data,[input.name] : input.value})
    }

    const HandleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const url = 'http://localhost:3700/register'
            const {data : res} = await axios.post(url,data)
            navigate('/login')
            console.log(res.message)
            alert("User created")
        } catch (e) {
            console.log(e)
        }
    }
    

    
  return (
    <>
    <section class="vh-100 bg-image">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" >
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                <form onSubmit={HandleSubmit}>
                  <div class="form-outline mb-4">
                    <input 
                    type="text" 
                    id="form3Example1cg"
                    name='name' 
                    class="form-control form-control-lg"
                    onChange={HandelChange}
                    value ={data.name} 
                    required />
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                  </div>
  
                  <div class="form-outline mb-4">
                    <input 
                    type="email" 
                    id="form3Example3cg"
                    name='email' 
                    class="form-control form-control-lg"
                    onChange={HandelChange}
                    value={data.email} 
                    required />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>
  
                  <div class="form-outline mb-4">
                    <input 
                    type="password"
                    name='password' 
                    id="form3Example4cg" 
                    class="form-control form-control-lg"
                    onChange={HandelChange}
                    value={data.password} 
                    required />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-success">Register</button>
                  </div>
  
                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/Login" class="fw-bold text-body"><u>Login here</u></Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Signup
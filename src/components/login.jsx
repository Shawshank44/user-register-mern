import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [data,setdata] = useState({
        email : "",
        password : ""
    })

    const HandleChange = ({currentTarget : input})=>{
        setdata({...data,[input.name] : input.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const url = 'http://localhost:3700/login'
            const {data : res} = await axios.post(url,data)
            localStorage.setItem("token", res.data)
            alert("Login Success")
            window.location = "/"
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
                <h2 class="text-uppercase text-center mb-5">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div class="form-outline mb-4">
                    <input 
                    type="email"
                    name='email' 
                    id="form3Example3cg" 
                    class="form-control form-control-lg"
                    onChange={HandleChange}
                    value = {data.email}
                    required/>
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>
  
                  <div class="form-outline mb-4">
                    <input 
                    type="password"
                    id="form3Example4cg" 
                    name='password'
                    class="form-control form-control-lg"
                    onChange={HandleChange}
                    value = {data.password}
                    required/>
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-success">Login</button>
                  </div>
  
                  <p class="text-center text-muted mt-5 mb-0">New User? <Link to="/signup" class="fw-bold text-body"><u>Signup here</u></Link></p>
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

export default Login
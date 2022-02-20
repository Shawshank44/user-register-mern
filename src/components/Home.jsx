import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
    const Logout = ()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }


  return (
    <>
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4"/>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <button className='btn btn-danger' onClick={Logout}>Logout</button>
    </p>
  </div>
    </>
  )
}

export default Home
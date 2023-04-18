import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  const goToHome=()=>{
navigate('/')
  }
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <div>
    
      <section>
            <h1>Contact Page</h1>
            <button onClick={goToHome}>Go To Home Page</button>
            <button onClick={()=>goBack()}>go back</button>
        </section>
    </div>
  )
}

export default Contact
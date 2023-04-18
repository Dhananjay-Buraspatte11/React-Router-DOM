import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate=useNavigate();
  const goToContact=()=>{
    navigate('/Contact')
  }
  return (
    <div>
   
        <section>
            <h1>About Page</h1>
            <button onClick={()=>goToContact()}>go To Contact Page</button>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </section>
    </div>
  )
}

export default About
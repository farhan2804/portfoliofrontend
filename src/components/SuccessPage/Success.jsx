import React from 'react'
import { NavLink } from 'react-router-dom'
const Success = () => {
  return (
    <>
        <h1>Form Submitted Successfully</h1>
        <a href="/"> Go back</a>
        {/* <NavLink className="startButton" to="/">
                    Go back
                  </NavLink> */}
    </>
  )
}

export default Success
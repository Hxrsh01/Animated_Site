import React from 'react'

const Navbar = () => {
  const style={
    Height:"20%",
    backgroundColor:"red",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    hover:"black"
  }
  return (
    <> 
    <nav style={style}>
        <h1>Logo</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar

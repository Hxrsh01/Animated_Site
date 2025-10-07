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
      <div>
        <h1>Logo</h1>
      </div>
    </nav>
    </>
  )
}

export default Navbar

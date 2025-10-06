import React from 'react'

const Welcome = () => {
  const name = "WELCOME TO THE NEW WORLD"
  const style = {
    background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };
  const btn = {
    height: "100px",
    width: "200px",
    cursor: "pointer",
    background: "black",
    color: "white",
    borderRadius: "10%",
    border: "2px solid grey"
  };
  return (
    <div style={style} className='container'>
      {/* <button style={btn}>WELCOME</button> */}
      <h1 >{name}</h1>
    </div>
  )
}

export default Welcome

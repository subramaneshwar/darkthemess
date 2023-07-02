import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Navbar({toggleTheme,theme}) {
    
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",fontSize:"1.5rem"}}>
        <div className="logo" style={{fontSize:"2rem",fontWeight:"bolder"}}>Geekster</div>
        <div className="div" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"80%"}}>
            <Link to='/home'   style={{textDecoration:"none" ,fontSize:"1.5rem",fontWeight:"bold" } }  >Home</Link>
            <Link to='/contact'   style={{textDecoration:"none" ,fontSize:"1.5rem",fontWeight:"bold"} }  >Contact</Link>
            <Link to='/service'   style={{textDecoration:"none" ,fontSize:"1.5rem",fontWeight:"bold"} }  >Service</Link>
            <Outlet/>
        </div>
        <button onClick={toggleTheme} style={{padding:"10px",fontWeight:"bold"}}>Toogle Theme to {theme!=="dark" ? "dark" : "light" }</button>
    </div>
  )
}

export default Navbar
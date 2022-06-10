import React from 'react'
import SidebarData from './SidebarData'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
      {SidebarData.map(
   (val , key)=> {
   return(
<li key={key}  className="row" 
id={window.location.pathname == val.link ? "active" : ""}
onClick ={()=>{
window.location.pathname=val.link

}} >
<div id ="sidebarIcon">{val.icon}</div>
<div id="sidebarTitle">{val.title}</div>
<br/>
</li>
   ) 
   }

    )}
    </ul>
    </div>
  )
}

export default Sidebar
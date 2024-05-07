import React from 'react'

const Sidebar = ({selectedObj}) => {
    const {logo, title, time, price, addmsg} = selectedObj;
  return (
    <>
    <div className='sidebar'>
        <div className="head">
            <div className="logo" style={{background: logo}}></div>
            <div className="time">
            <h2>{title}</h2>
            <p>{time} Program</p>
            </div>
            </div>
           
       
        <div className="price">Rs {price}</div>
       
      
    </div>
    <div className='add'>
            <p>{addmsg}</p>
        </div>
      <div className="btn">
      <button>Rs {price}</button>
  </div>
 </>
    
  )
}

export default Sidebar
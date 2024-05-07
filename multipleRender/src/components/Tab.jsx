import React from 'react'

const Tab = ({whatsKey}) => {
    const clickHandler = (e) => {
        let key = e.target.id;
        whatsKey(key);
        console.log(e.target.id);
    }
  return (
    <div className='tab'>
        <div id='first' onClick={clickHandler}>First</div>
        <div id='second' onClick={clickHandler}>Second</div>
        <div id='third' onClick={clickHandler}>Third</div>
        <div id='fourth' onClick={clickHandler}>Fourth</div>
    </div>
  )
}

export default Tab
import React from 'react'

const Drop = ({objArr, whichPack}) => {
    // radio, title, desc, price/ time, [discard-] 
    // {title, desc, discardPrice, price, time}
    const changeHandler = (e) => {
        let pack = e.target.value;
        whichPack(pack);
    }
  return (
    <div className='drop'>
        {
            objArr.map((obj, index)=>{
                const {id, title, desc, discardPrice, price, time} = obj

                return <div key={id}>
                <input type="radio" name="package" id={id} value={index} onChange={changeHandler} />
                <label htmlFor={id}>
                    <div className="desc">
                    <h1>{title}</h1>
                    <hr />
                    <p>{desc}</p>
                    </div>
                    <div className="price">
                        <span className='discounted'>Rs {discardPrice}</span><strong>Rs {price}</strong><span className='time'>/{time}</span>
                    </div>
                </label>
                </div>
        })
        }
    </div>
  )
}

export default Drop
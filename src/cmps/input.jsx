import React from 'react'

function Input({type , name , placeholder , handleChange , value}) {
    return (
        <div>
            <input onChange={handleChange} value={value} type={type} name={name} placeholder={placeholder}></input>
        </div>
    )
}

export default Input
import React from 'react'

function Input({type , name , placeholder , handleChange}) {
    return (
        <div>
            <input onChange={handleChange} type={type} name={name} placeholder={placeholder}></input>
        </div>
    )
}

export default Input
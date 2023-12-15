import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='px-6 py-2 border-2 border-orange-600 rounded-full
             hover:bg-orange-600 font-bold'>{props.title}
            </button>
        </div>
    )
}

export default Button

import React from 'react'
import classnames from 'classnames'

const Button = ({size, bgColor, txt}) => {
    
    return (
        <button className={classnames('bg-gray-100 shadow-md font-bold py-2 px-4 rounded')}>
            {txt}
        </button>
    )
}

export default Button
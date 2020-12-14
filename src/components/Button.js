import React, { useState } from 'react'
import classnames from 'classnames'

const Button = ({size, bgColor, txt}) => {
    const [punch, setPunch] = useState('')

    function handleClick(){
        const date = new Date()
        setPunch(date.toLocaleTimeString())
    }
    // useEffect(() => {
    //     const date = new Date()
    //     setPunch(date.toLocaleDateString())

    // })

    return (
        <button className={classnames('bg-gray-100 shadow-md font-bold py-2 px-4 rounded m-1 flex-col')}
            onClick={handleClick}
        >
            {txt}
            {punch}
        </button>
    )
}

export default Button
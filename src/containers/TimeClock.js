import React, { useState } from 'react'
import Button from '../components/Button'
import Clock from '../components/Clock'


const TimeClock = () => {



    const [punch, setPunch] = useState('')
    const [meal, setMeal] = useState(false)
    
    const time = new Date()

    const handleClockIn = () => {
        setPunch(time.toLocaleTimeString)
    }

    

    // function handleMealStart()  {
    //     setMeal(true)
    // }

    
    // clockin function
        // mutation: create clockin
    // clockout function
        // mutation: create clockout
    // break start function
        // mutation: create break start ('break end' is just another clock in.)
    // view timecard
    return(
        <div className='border-solid border-2 w-max'>
            <Clock />
            <Button txt={"Clock-in"} handleClockIn={handleClockIn}/>
            <Button txt={"Clock-out"}/>
            <Button txt={{meal} ? "Meal Start" : "Meal End"}/>
            {/*if break? = true, Button text changes to break end
            break ? Break End : Break Start */}
            <Button txt={"View Timecard"}/>
            <div>
            </div>
        </div>
    )
}

export default TimeClock
import React, { useState } from 'react'
import Button from '../components/Button'
import Clock from '../components/Clock'


const TimeClock = () => {
    const [clockIn, setClockIn] = useState('')
    const [clockOut, setClockOut] = useState('')
    const [punch, setPunch] = useState('')
    const [meal, setMeal] = useState(false)
    const [mealText, setMealText] = useState('Meal Start')
    
    const time = new Date()

    const handleClockIn = () => {
        setClockIn(time.toLocaleTimeString())
    }

    const handleClockOut = () => {
        setClockOut(time.toLocaleTimeString())
    }

    const handleMealStart = () => {
        setPunch(time.toLocaleTimeString())
        setMeal(!meal)
        setMealText(meal ? 'Meal End' : 'Meal Start')
    }
    
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
            <Button txt={"Clock-in"} handleClick={handleClockIn} punch={clockIn}/>
            <Button txt={"Clock-out"} handleClick={handleClockOut} punch={clockOut}/>
            <Button txt={mealText} handleClick={handleMealStart} punch={punch}/>
            {/*if break? = true, Button text changes to break end
            break ? Break End : Break Start */}
            <Button txt={"View Timecard"}/>
            <div>
            </div>
        </div>
    )
}

export default TimeClock
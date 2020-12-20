import React, { useState } from 'react'
import Button from '../components/Button'
import Clock from '../components/Clock'


const TimeClock = () => {
    const [clockIn, setClockIn] = useState('')
    const [clockOut, setClockOut] = useState('')
    const [punch, setPunch] = useState('')
    const [date, setDate] = useState('')
    const [meal, setMeal] = useState(false)
    const [mealText, setMealText] = useState('Meal Start')
    
    const time = new Date()

    const handleClockIn = () => {
        setClockIn(time.toLocaleTimeString())
        setDate(time.toLocaleDateString())
    }

    const handleClockOut = () => {
        setClockOut(time.toLocaleTimeString())
        setDate(time.toDateString())
    }

    const handleMealStart = () => {
        setPunch(time.toLocaleTimeString())
        setMeal(!meal)
        setMealText(meal ? 'Meal End' : 'Meal Start')
    }


    
    // clockin function
        // mutation: create clockin
    /* clock_in {
        date -> todays_date
        clockIn -> punch_time
        "Clock In" -> punch_type
        currentEmployee -> employee_id
        employee.timeard.id -> timecard_id 
    } */
    // clockout function
        // mutation: create clockout
    /* clock_in {
        date -> todays_date
        clockOut -> punch_time
        "Clock Out" -> punch_type
        currentEmployee -> employee_id
        employee.timeard.id -> timecard_id 
    } */
    // break start function
        // mutation: create break start ('break end' is just another clock in.)
    /* clock_in {
        date -> todays_date
        breakStart -> punch_time
        "Break Start " -> punch_type
        currentEmployee -> employee_id
        employee.timeard.id -> timecard_id 
    } */
    // view timecard
        // route to ViewTimecard
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
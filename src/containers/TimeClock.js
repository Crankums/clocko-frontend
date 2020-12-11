import React from 'react'
import Button from '../components/Button'
import Clock from '../components/Clock'


const TimeClock = () => {

    // clockin function
        // mutation: create clockin
    // clockout function
        // mutation: create clockout
    // break start function
        // mutation: create break start ('break end' is just another clock in.)
    // view timecard
    return(
        <div className='border-solid border-2 w-max'>
            <Clock/>
            <Button txt={"Clock-in"}/>
            <Button txt={"Clock-out"}/>
            <Button txt={"Break Start"}/>
            {/*if break? = true, Button text changes to break end
            break ? Break End : Break Start */}
            <Button txt={"View Timecard"}/>
        </div>
    )
}

export default TimeClock
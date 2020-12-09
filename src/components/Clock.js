import React, { Component } from 'react'

class Clock extends Component {
    state = {
        time: new Date()
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            time: new Date()
        })
    }
    render()
    {
        return (
            <div>
                Clock
                <div className='text-2xl w-max font-bold bg-white shadow-md px-3 py-2'>
                    {this.state.time.toLocaleTimeString()}
                </div>
            </div>
        )
    }
}

export default Clock
import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Link,
   } from 'react-router-dom'

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className='navbar'>                      
                    <Link to='/'>|Home| </Link>
                    <Link to='/profile'> |Profile| </Link>
                    <Link to='/time-clock'> |Time Clock| </Link>
                    <Link to='/time-card'> |Time Card| </Link>
                    <Link to='/admin-panel'> |Admin Panel| </Link>
                    <Link to='/about'> |About| </Link>                   
                </nav>
            </div>
        </Router>
    )
}

export default Navbar
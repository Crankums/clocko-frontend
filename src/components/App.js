import React, { Component } from 'react';
// import Employees from '../containers/Employees'
// import Employee from './Employee'
// import Clock from './Clock';
// import Button from './Button';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Navbar from './Navbar';
import TimeClock from '../containers/TimeClock';
import Timecard from './Timecard';
import ViewEmployees from '../containers/ViewEmployees';


class App extends Component  {
  
  render(){
    return (
// NAVBAR: [LOGIN/LOGOUT, HOME, TIME CLOCK, TIME CARD, PROFILE, ADMIN PANEL, ABOUT] <-ever present, sticky?
     <div className="container mx-auto px-4">
        <Navbar />
        <Switch>
          <Route path='/time-clock'>
            <TimeClock />
          </Route>
          <Route path='/time-card'>
            <Timecard/>
          </Route>
          <Route path='/view-employees'>
            <ViewEmployees />
          </Route>
        {/* <div className='border-solid border-2 w-max'>
          <Clock />
          <Button txt={"Clock-in"}/>
          <Button txt={"Clock-out"}/>
          <Button txt={"Break Start"}/>
          <Button txt={"View Timecard"}/>
        </div> */}
        </Switch>
        <footer className='py-2'> Built following the steps laid out in: <a href="https://mattboldt.com/2019/01/07/rails-and-graphql">https://mattboldt.com/2019/01/07/rails-and-graphql/</a></footer>
      </div>
      
    );
  }
}

export default App;

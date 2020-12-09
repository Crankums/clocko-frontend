import React, { Component } from 'react';
import Employees from './Employees'
import Employee from './Employee'
import Clock from './Clock';
import Button from './Button';

class App extends Component  {
  state = {
    selectedEmployee: null
  };

  selectEmployee = (employee) => {
    this.setState({ selectedEmployee: employee})
  }
  render(){
    return (
      <div className="container mx-auto px-4">
        <div className='border-solid border-2 w-max border-black'>
          <Clock />
          <Button txt={"Clock-in"}/>
          <Button txt={"Clock-out"}/>
          <Button txt={"Break Start"}/>
          <Button txt={"View Timecard"}/>
        </div>
        {this.state.selectedEmployee ?
        <Employee employee={this.state.selectedEmployee} selectEmployee={this.selectEmployee} /> :
        <Employees selectEmployee={this.selectEmployee} /> }
        <footer className='py-2'> Built following the steps laid out in: <a href="https://mattboldt.com/2019/01/07/rails-and-graphql">https://mattboldt.com/2019/01/07/rails-and-graphql/</a></footer>
      </div>
    );
  }
}

export default App;

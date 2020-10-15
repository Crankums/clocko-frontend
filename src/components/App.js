import React, { Component } from 'react';
import Employees from './Employees'
import Employee from './Employee'

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
        {this.state.selectedEmployee ?
        <Employee employee={this.state.selectedEmployee} selectEmployee={this.selectEmployee} /> :
        <Employees selectEmployee={this.selectEmployee} /> }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Employee from '../components/Employee'
import Employees from '../components/Employees'

class ViewEmployees extends Component {
    state = {
        selectedEmployee: null
    };
    
    selectEmployee = (employee) => {
        this.setState({ selectedEmployee: employee})
        }
        render(){
            return( 
                <div>
                    {this.state.selectedEmployee ?
                    <Employee employee={this.state.selectedEmployee} selectEmployee={this.selectEmployee} /> :
                    <Employees selectEmployee={this.selectEmployee} /> }
                </div>
          )
      }
}

export default ViewEmployees
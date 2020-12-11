import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import Gravatar from 'react-gravatar';
import EmployeeAvatar from './EmployeeAvatar';
import CreateEmployee from './CreateEmployee'

const EMPLOYEES_QUERY = gql`
    query {
        employees{
            id
            name
            email
            punches {
                id
            }
        }
    }
`;

class Employees extends Component{
    updateEmployees = (cache, { data: { createEmployee } }) => {
        const { employees } = cache.readQuery({ query: EMPLOYEES_QUERY });
        cache.writeQuery({
            query: EMPLOYEES_QUERY,
            data: { employees: employees.concat([createEmployee.employee]) }
        })
    }
    render(){
        return (
            <Query query={EMPLOYEES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching...</div>
                    if (error) return <div>Error!</div>
                    return(
                        <div className='flex flex-wrap mb-4'>
                            <Fragment>
                            {data.employees.map((employee) => {
                                return <div key={employee.id} 
                                            className="m-4 w-1/4 rounded overflow-hidden shadow-lg"
                                            onClick={this.props.selectEmployee.bind(this, employee)}>
                                  <EmployeeAvatar employee={employee} />
                                  <div className='px-6 py-4'>
                                    <div className='font-bold text-x1 mb-2'>{employee.name}</div>
                                    <p className='text-grey-darker text-base'>{employee.email}</p>
                                    <p className='text-grey-darker text-base'>{employee.punches.length>0 ? employee.punches.length : 'No Punches!'}</p>
                                    <p>View Timecard</p>
                                  </div>
                                </div>
                            })}
                            <div className='m-4 w-1/4 rounded overflow-hidden shadow-lg'>
                                <CreateEmployee onCreateEmployee={this.updateEmployees}/>
                            </div>
                            </Fragment>
                        </div>
                    )
                }}          
            </Query>
        )
    }
}

export default Employees
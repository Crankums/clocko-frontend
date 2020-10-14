import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Gravatar from 'react-gravatar';



const EMPLOYEES_QUERY = gql`
    query {
        employees{
            id
            name
            email
        }
    }
`;

class Employees extends Component{
    render(){
        return (
            <Query query={EMPLOYEES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching...</div>
                    if (error) return <div>Error!</div>
                    return(
                        <div className='flex flex-wrap mb-4'>
                            {data.employees.map((employee) => {
                                return <div key={employee.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                                  <Gravatar email={employee.email} size={150} className="w-full" />
                                  <div className='px-6 py-4'>
                                    <div className='font-bold text-x1 mb-2'>{employee.name}</div>
                                    <p className='text-grey-darker text-base'>{employee.email}</p>
                            <p className='text-grey-darker text-base'>{employee.punches ? employee.punches : 'No Punches!'}</p>
                                  </div>
                                </div>
                            })}
                        </div>
                    )
                }}          
            </Query>
        )
    }
}

export default Employees
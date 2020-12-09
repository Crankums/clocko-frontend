import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import EmployeeAvatar from './EmployeeAvatar';
import Punches from './Punches';
import React, { Fragment } from 'react';

const EMPLOYEE_QUERY = gql`
    query Employee($id: ID!) {
        employee(id: $id) {
            punches {
                id
                clockIn
                clockOut
                todaysDate
            }
        }
    }
`

const Employee = ({employee, selectEmployee}) => (
    <Query query={EMPLOYEE_QUERY} variables={{ id: employee.id}}>
        {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>
            if (error) return <div>Error!</div>

            return(
                <Fragment>
                    <div className='flex my-4'>
                        <button
                            className= 'bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded'
                            onClick = {selectEmployee.bind(this, null)}>
                                Back
                            </button>
                    </div>
                    <div className='flex mb-4'>
                        <div className='my-4 w-1/4 rounded overflow-hidden'>
                                <EmployeeAvatar employee={employee}/>
                        </div>
                        <div className='my-4 px-4 w-3/4'>
                            <Punches punches={data.employee.punches} />
                        </div>
                    </div>
                </Fragment>
            )
        }}
    </Query>
)
export default Employee
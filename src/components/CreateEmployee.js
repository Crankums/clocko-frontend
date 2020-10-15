import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_EMPLOYEE = gql`
    mutation CreateEmployee($name: String!, $phoneNumber: String!) {
        createEmployee(input: {name: $name, phoneNumber: $phoneNumber}) {
            employee {
                id
                name
                email
                phoneNumber
                employeeId
                jobId

            }
            errors
        } 
    }
`;

class CreateEmployee extends Component {
    state = {
        name: '',
        phoneNumber: ''
    }

    onSubmit = (e, createEmployee) => {
        e.preventDefault();
        createEmployee({ variables: this.state })
        this.setState({ name: '', phoneNumber: ''})
    } 

    render(){
        return (
            <Mutation 
            mutation={CREATE_EMPLOYEE} 
            update={this.props.onCreateEmployee}>
            {createEmployeeMutation => (
                <form className='px-8 pt-6 pb-8 mb-4' onSubmit={e => this.onSubmit(e, createEmployeeMutation)}>
                    <h4 className='mb-3'>Create new employee</h4>
                    <div className='mb-4'>
                        <input 
                            className='border rounded w-full py-2 px-3'
                            type='text'
                            value={this.state.name}
                            placeholder='Name'
                            onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div className='mb-6'>
                        <input 
                        className='border rounded w-full py-2 px-3'
                        type='tel'
                        value={this.state.phoneNumber}
                        placeholder='Phone Number'
                        onChange={e => this.setState({ phoneNumber: e.target.value })}/>
                    </div>
                    <button
                    className='bg-blue text-white py-2 px-4 rounded'
                    type='submit'>
                    Create
                    </button>
                </form>
            )}
            </Mutation>
        )
    }
}

export default CreateEmployee
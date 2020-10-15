import React, { Fragment } from 'react';
import Gravatar from 'react-gravatar';

const EmployeeAvatar = ({ employee }) => (
    <Fragment>
        <Gravatar email = {employee.email} size={150} className='w-full'/>
        <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{employee.name}</div>
            <p className='text-grey-darker text-sm'>{employee.email}</p>
            <p className='text-grey-darker text-base'>{employee.punches ? "Timecard" : "No Timecard Available"}</p>
        </div>        
    </Fragment>
)
export default EmployeeAvatar
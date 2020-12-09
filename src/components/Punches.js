import React, { Fragment } from 'react'

const Punches = ({ punches }) => (
    <Fragment>
        {punches.map((punch) =>
            <div key={punch.id} className='flex border-b border-solid border-grey-light'>
                <div className='w-3/4 p-4'>
                    <h3>{punch.todaysDate}</h3>
                    <p className='text-grey-darker'>
                        "a group of attributes here"
                    </p>
                </div>
                <div className='w-1/4 p-4 text-right'>
                    "another attribute here"
                </div>
            </div>)}
    </Fragment>
);
export default Punches
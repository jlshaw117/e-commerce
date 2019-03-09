import React from 'react';

export default ({currentUser, logout}) => {

    if (currentUser) {
        return (
            <div>
                <button className='logout-button' onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Please Login or Signup</h1>
            </div>
        )
    }
}
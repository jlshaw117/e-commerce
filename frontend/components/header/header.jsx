import React from 'react';

export default ({currentUser, logout}) => {

    if (currentUser) {
        return (
            <div>
                <h1>Hello {currentUser.f_name}</h1>
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
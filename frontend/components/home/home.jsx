import React from 'react';

class Home extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
            <h1>This is {this.props.currentUser.f_name}'s home page</h1>

        );
    }
}

export default Home;
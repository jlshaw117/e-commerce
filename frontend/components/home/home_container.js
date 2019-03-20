import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => {

    return ({
        currentUser: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
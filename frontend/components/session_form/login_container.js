import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {

    return ({
        user: {
            email: '',
            password: ''
        },
        formType: 'Login',
        errors: errors.session
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
        action: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
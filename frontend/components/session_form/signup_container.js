import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors, recieveErrors } from '../../actions/session_actions';

const mapStatToProps = ({ errors }) => {

    return ({
        user: {
            f_name: '',
            l_name: '',
            email: '',
            password: '',
            password2: ''
        },
        formType: 'Sign Up',
        errors: errors.session
    });
};

const mapDispatchToProps = dispatch => {
    
    return ({
        action: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        recieveErrors: (err) => dispatch(recieveErrors(err))
    });
};

export default connect(mapStatToProps, mapDispatchToProps)(SessionForm);
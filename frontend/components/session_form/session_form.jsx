import React from 'react';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update (field) {
        const cap = (str) => str[0].toUpperCase() + str.slice(1);
        return (e) => {
            let val;
            if (field === 'f_name' || field === 'l_name') {
                if (e.target.value !== "") {
                    val = cap(e.target.value);
                } else {
                    val = '';
                }
            } else {
                val = e.target.value;
            }
            this.setState({ [field]: val });
        };
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.props.formType === 'Sign Up' && this.state.password !== this.state.password2) {
            this.props.recieveErrors(['Passwords do not match']);
        } else {
            this.props.action(this.state);
        }
    }

    componentWillUnmount () {
        this.props.clearErrors();
    }

    render() {

        const renderErrors = () => {
            return (
                <span>{this.props.errors[0]}</span>
            )
        };

        const nameInput = () => {
            return (
                <div className='name-input'>
                    <input 
                        type="text"
                        placeholder='First Name'
                        value={this.state.f_name}
                        onChange={this.update('f_name')}
                        required 
                    />
                    <input 
                        type="text"
                        placeholder='Last Name'
                        value={this.state.l_name}
                        onChange={this.update('l_name')}
                        required
                    />
                </div>
            )
        }

        const confirmPassword = () => {
            return (
                <div className='confirm-password'>
                    <input 
                        type="password"
                        placeholder='Confirm Password'
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        required
                    />
                </div>
            )
        }

        return (
            <div className='session-form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    {this.props.errors.length ? renderErrors() : <div></div> }
                    {this.props.formType === 'Sign Up' ? nameInput() : <div></div>}
                    <input type="email"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.update('email')}
                        required
                    />
                    <input type="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.update('password')}
                        required
                    />
                    {this.props.formType === 'Sign Up' ? confirmPassword() : <div></div>}
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;
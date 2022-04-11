import React from 'react';
import { signUp } from '../../functions/users';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            surname: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        signUp(this.state);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password Confirm</label>
                            <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Surname</label>
                            <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
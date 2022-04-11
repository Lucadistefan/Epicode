import React from 'react';
import Input from '../input/Input';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.email.current.value, this.password.current.value);
    }

    render() {
        return(
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            handleChange={this.handleChange}
                            id="email"
                            label="Email"
                            name="email"
                            rules={['required', 'email', 'boh']}
                            type="email"
                        />
                        <Input
                            id="password"
                            label="Password"
                            name="password"
                            rules={['required', 'minLength:8']}
                            type="password"
                        />
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
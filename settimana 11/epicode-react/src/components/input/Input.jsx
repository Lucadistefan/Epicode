import React from 'react';
import Alert from '../alert/Alert';
import Validator from '../../classes/Validator';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this._inputRef = React.createRef();
        this._validator = new Validator();

        this.state = {
            errorMessage: false
        };
    }

    render() {
        console.log(this.state.errorMessage);
        const alert = this.state.errorMessage 
            ? <Alert message={this.state.errorMessage} type="danger" />
            : <></>;

        return (
            <div className={this.props.wrapperClass}>
                <label forhtml={this.props.id}>{this.props.label}</label>
                <input
                    name={this.props.name}
                    onChange={this.validate}
                    ref={this._inputRef}
                    type={this.props.type}
                />
                { alert }                
            </div>
        );
    }

    validate = () => {
        this.setState({
            errorMessage: this._validator.validate(this._inputRef.current.value, this.props.rules)
        });

        this.props.handleChange();
    }
}
import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Ciao {this.props.name}</h1>
            </div>
        );
    }
}
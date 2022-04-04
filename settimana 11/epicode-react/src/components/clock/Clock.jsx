import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: Date.now()
        };
    }

    componentDidMount() {
        this.start();
    }

    render() {
        return (
            <div>
                <p>{ this.state.time }</p>
                <button onClick={() => this.stop()}>Stop</button>
                <button onClick={() => this.start()}>Start</button>
            </div>
        );
    }

    start() {
        this._clockIntervalId = setInterval(() => this.setState({
            time: Date.now()
        }), 1000);
    }

    stop() {
        console.log('stop');
        clearInterval(this._clockIntervalId);
    }
}
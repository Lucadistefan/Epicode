import React from 'react';

export default class UsersListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.user.id }</td>
                <td>{ this.props.user.name }</td>
                <td>{ this.props.user.email }</td>
                <td className="text-end">
                    <button className="btn btn-danger" onClick={() => this.props.deleteUser(this.props.user)}>Delete</button>
                </td>
            </tr>
        );
    }
}
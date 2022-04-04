import React from 'react';
import { getUsers } from '../../functions/users';
import UsersListRow from '../UsersListRow/UsersListRow';

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        getUsers().then(users => this.setState({ users }));
    }

    render() {
        const rows = this.state.users.map(user => <UsersListRow key={user.id} user={user} />);

        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}
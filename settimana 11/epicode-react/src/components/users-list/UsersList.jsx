import React from 'react';
import { Outlet } from 'react-router-dom';
import { getUsers } from '../../functions/users';
import UsersListRow from '../users-list-row/UsersListRow';

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

    deleteUser = (user) => {
        const users = [...this.state.users];

        users.splice(
            users.indexOf(user), 1
        );

        this.setState({ users });
    }

    render() {
        const rows = this.state.users.map(user => <UsersListRow deleteUser={this.deleteUser} key={user.id} user={user} />);

        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-end"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </>
        );
    }
}
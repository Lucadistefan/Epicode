import { useEffect, useState } from "react";
import { getUsers } from "../../functions/users";
import UsersListRow from "../users-list-row/UsersListRow";

export default function UsersListFn(props) {
    const [hasLoadedUsers, setHasLoadedUsers] = useState(false);
    const [users, setUsers] = useState([]);

    // Load users
    if (!hasLoadedUsers) {
        getUsers().then(users => setUsers(users));
        setHasLoadedUsers(true);
    }

    const deleteUser = (user) => {
        const _users = [...users];

        _users.splice(
            _users.indexOf(user), 1
        );

        setUsers(_users);
    }

    const rows = users.map(user => <UsersListRow deleteUser={deleteUser} key={user.id} user={user} />);

    return (
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
    );
}
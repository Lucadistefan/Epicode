import { User } from "../models/User"

export const getUsers = () => {
    return fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => users.map(user => new User(user.id, user.email, user.name)));
};

// export const getUsers = async () => {
//     const resp = await fetch('http://jsonplaceholder.typicode.com/users');
//     const users = await resp.json();

//     return users.map(user => new User(user.id, user.email, user.name));
// };
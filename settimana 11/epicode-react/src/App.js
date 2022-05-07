import 'bootstrap/dist/js/bootstrap';

import logo from './logo.svg';
import './App.css';

import Ciaone from './components/ciaone/Ciaone';
import CiaoneClass from './components/ciaone-class/CiaoneClass';
import Clock from './components/clock/Clock';
import UsersList from './components/users-list/UsersList';
import ClockFn from './components/clock-fn/ClockFn';
import UsersListFn from './components/users-list-fn/UsersListFn';
import Arena from './components/arena/Arena';
import SignUp from './components/sign-up/SignUp';
import Login from './components/login/Login';
import Map from './components/map/Map';

import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './components/home/Home';
import User from './components/user/User';
import Users from './components/users/Users';
import NotFound from './components/not-found/NotFound';
import PostsList from './components/posts-list/PostsList';
import CommentsList from './components/comments-list/CommentsList';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Outlet />}>
            <Route path=":postId/comments" element={<CommentsList />} />
          </Route>

          <Route path="/users" element={<Outlet />}>
            <Route path=":userId" element={<Outlet />}> { /* /users/:userId */ }
              <Route index element={<User />} />
              <Route path="posts" element={<PostsList />} />{ /* /users/:userId/posts */ }
            </Route>
            <Route index element={<UsersList />} />
          </Route>

          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;

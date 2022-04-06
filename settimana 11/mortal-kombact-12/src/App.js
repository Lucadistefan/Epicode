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

function App() {
  return (
    <div>
      <header className="App-header"></header>
      <div className="App container">
        <Arena />
      </div>
    </div>
  );
}

export default App;

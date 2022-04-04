import 'bootstrap/dist/js/bootstrap';

import logo from './logo.svg';
import './App.css';

import Ciaone from './components/ciaone/Ciaone';
import CiaoneClass from './components/ciaone-class/CiaoneClass';
import Clock from './components/clock/Clock';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList />
      </header>
    </div>
  );
}

export default App;

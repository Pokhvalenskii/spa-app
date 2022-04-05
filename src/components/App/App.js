import './App.css';
import UserRoutes from '../../routes/UserRoutes';
import NavMenu from '../NavMenu/NavMenu';

function App() {

  return (
    <div className="App">
      <UserRoutes />
      <NavMenu />
    </div>
  );
}

export default App;

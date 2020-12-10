import './App.module.scss';
import Navbar from './components/Navbar';
import Routes from './containers/routes';
import inventory  from './data/inventory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes inventory={inventory}/>
    </div>
  );
}

export default App;

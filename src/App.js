import logo from './logo.svg';
import './App.css';
import "./Mobile.css";
import Home from './containers/Home';
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;

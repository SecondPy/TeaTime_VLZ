import logo from './logo.svg';
import './App.css';



import TableSelection from './components/TableSelection'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Добро пожаловать в чайный клуб TeaTime</h1>
        <TableSelection />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

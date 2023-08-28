import logo from './logo.svg';
import './App.css';



import TableSelection from './components/TableSelection'


function App() {
  return (
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500&dislpay=swap')
    
    <div className="App">
      <header className="App-header">
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        let tg = window.Telegram.WebApp;
        tg.expand();
            let data = 'абракадабра'
            tg.sendData(JSON.stringify(data));
            tg.close();
    </script>
        <h1>Добро пожаловать в чайный клуб TeaTime</h1>
        <TableSelection />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </style>
  );
}

export default App;

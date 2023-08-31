import logo from './logo.svg';
import './App.css';



import TableSelection from './components/TableSelection'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form id = "form">  
        <button id="order">Забронировать</button>
        </form>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        let tg = window.Telegram.WebApp;
        let order =  document.getElementById("order");
        tg.expand();
        order.addEventListener("click", () => {
            let data = 'абракадабра';
            tg.sendData(JSON.stringify(data));
        }
            
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
  );
}

export default App;

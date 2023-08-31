import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  let tg = window.Telegram.WebApp;
  let order =  document.getElementById("order");
  tg.expand();
  order.addEventListener("click", () => {
      let data = 'абракадабра';
      tg.sendData(JSON.stringify(data));
    });
  tg.close();
});


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
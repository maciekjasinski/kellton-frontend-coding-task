import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from '@views/Homepage';
import { ChooseMinifig } from '@views/ChooseMinifig';
import { Checkout } from '@views/Checkout';
import { CartProvider } from './context/cart';

function App() {
  return (
    <BrowserRouter basename="/kellton-frontend-coding-task">
      <CartProvider>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/choose-minifig" element={<ChooseMinifig />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

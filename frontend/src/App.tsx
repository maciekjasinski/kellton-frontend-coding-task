import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from '@views/Homepage';
import { ChooseMinifig } from '@views/ChooseMinifig';
import { CartProvider } from './context/cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/choose-minifig" element={<ChooseMinifig />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

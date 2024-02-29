import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@common/Layout';
import { Homepage } from '@views/Homepage';
import { ChooseMinifig } from '@views/ChooseMinifig';
import { Checkout } from '@views/Checkout';
import { CartProvider } from './context/cart';

function App() {
  return (
    <BrowserRouter basename="/kellton-frontend-coding-task">
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/choose-minifig" element={<ChooseMinifig />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

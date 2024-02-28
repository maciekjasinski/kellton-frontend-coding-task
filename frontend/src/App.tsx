import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Homepage</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

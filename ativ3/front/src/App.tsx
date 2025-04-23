import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Palpite from './pages/Palpite';
import Historico from './pages/Historico';
import { BetProvider } from './contexts/BetContext';
import Header from './components/Header';

export default function App() {
  return (
    <BetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </BetProvider>
  );
}

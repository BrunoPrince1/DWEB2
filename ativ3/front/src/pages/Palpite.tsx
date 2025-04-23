import { useEffect, useRef } from 'react';
import { useBet } from '../contexts/BetContext';
import BetDisplay from '../components/BetDisplay';

export default function Palpite() {
  const { newBet } = useBet();
  const once = useRef(false);

  useEffect(() => {
    if (!once.current) {
      newBet();
      once.current = true;
    }
  }, [newBet]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#121212',      // fundo escuro global
      }}
    >
      <div
        style={{
          background: '#222',
          padding: 32,
          borderRadius: 16,
          width: 350,
          textAlign: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
        }}
      >
        <h1 style={{ color: '#fff', marginBottom: 24 }}>
          Palpite para a Mega‑sena
        </h1>

        <BetDisplay />

        <button
          onClick={newBet}
          style={{
            marginTop: 24,
            padding: '12px 24px',
            background: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          Nova sugestão
        </button>
      </div>
    </div>
  );
}

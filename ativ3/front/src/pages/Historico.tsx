import { useBet } from '../contexts/BetContext';
import Ball from '../components/Ball';

export default function Historico() {
  const { history } = useBet();

  return (
    <div
      style={{
        background: '#222',
        padding: 32,
        borderRadius: 16,
        textAlign: 'center',
        width: 380,
        boxSizing: 'border-box',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
      }}
    >
      <h1 style={{ marginBottom: 24, color: '#fff' }}>Palpites</h1>

      {history.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhum palpite ainda.</p>
      ) : (
        history.map((bet, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 16,
            }}
          >
            {bet.map((n) => (
              <Ball key={n} n={n} />
            ))}
          </div>
        ))
      )}
    </div>
  );
}

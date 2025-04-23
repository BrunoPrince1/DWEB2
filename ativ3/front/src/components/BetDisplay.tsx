import Ball from './Ball';
import { useBet } from '../contexts/BetContext';

export default function BetDisplay() {
  const { currentBet } = useBet();

  return (
    <div
      style={{
        minHeight: 100,
        border: '2px solid #2ecc71',     // verde
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 6,
        background: '#1b1b1b',          // contraste no fundo
      }}
    >
      {currentBet
        ? currentBet.map((n) => (
            <Ball key={n} n={n} />
          ))
        : <span style={{ color: '#fff' }}>Sem sugestão</span>}
    </div>
  );
}

// src/pages/Landing.tsx
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div
      style={{
        background: '#222',        /* cor do card */
        padding: 32,
        borderRadius: 16,
        textAlign: 'center',
        width: 340,
        boxSizing: 'border-box',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
      }}
    >
      <h1 style={{ marginBottom: 24, color: '#fff' }}>Bem‑Vindo!</h1>

      <Link to="/palpite">
        <button
          style={{
            background: '#3498db',   /* azul */
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '12px 24px',
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          Clique para começar
        </button>
      </Link>
    </div>
  );
}

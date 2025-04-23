import { Link } from 'react-router-dom';
// Use import para carregar a imagem
import logoImage from '../images/fatec_jacarei.png'; // Caminho correto da imagem

export default function Header() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 140,
        background: '#2d2d2d',
        display: 'flex',
        justifyContent: 'space-between', // Espaça os itens: imagem à esquerda e links à direita
        alignItems: 'center',
        paddingLeft: 20, // Recuo da borda esquerda
        paddingRight: 32, // Recuo da borda direita
        borderBottom: '8px solid #1a1a1a',
        zIndex: 10,
      }}
    >
      {/* Logo à esquerda */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logoImage} 
          alt="Logo" 
          style={{ height: 80, width: 300, marginRight: 20 }} // Ajuste o tamanho conforme necessário
        />
        <span style={{ color: '#fff', fontSize: 18 }}>Logo</span> {/* Caso queira um texto junto */}
      </div>

      {/* Links à direita */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link style={linkStyle} to="/">Início</Link>
        <Link style={linkStyle} to="/palpite">Palpite</Link>
        <Link style={linkStyle} to="/historico">Histórico</Link>
      </div>
    </nav>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: 18,
  fontWeight: 500,
};

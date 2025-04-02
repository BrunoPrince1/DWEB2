import { useName } from './NameContext'; // Certifique-se de que o contexto está sendo importado corretamente
import Ball from './Ball';

const Display: React.FC = () => {
  const { name } = useName();  

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',  // Centraliza horizontalmente
      border: '2px solid #3498db',  // Bordas arredondadas para a área
      borderRadius: '10px',         // Bordas arredondadas
      padding: '10px',
      minHeight: '80px',            // Garantindo que a área tenha altura mínima
      width: '100%',
      boxSizing: 'border-box',
      marginTop: '20px',  // Aumentando a distância entre a área de digitação e a borda de exibição
    }}>
      {name ? (
        name.split('').map((letter, index) => <Ball key={index} letter={letter} />)  // Exibe cada letra dentro de um círculo
      ) : (
        <span style={{ color: '#fff', textAlign: 'center' }}>Sem entrada</span>  // Texto padrão quando não há nome
      )}
    </div>
  );
};

export default Display;

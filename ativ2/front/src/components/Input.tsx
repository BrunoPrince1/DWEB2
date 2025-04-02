import React from 'react';
import { useName } from './NameContext';  // Importe o hook do contexto

const Input: React.FC = () => {
  const { setName } = useName();

  const inputStyle: React.CSSProperties = {
    padding: '8px',  // Reduzindo o padding
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',  // Ajusta a largura do campo
    maxWidth: '300px',  // Limita a largura máxima do campo
    marginBottom: '10px',
  };

  return (
    <input
      type="text"
      placeholder="Digite um nome"
      onChange={(e) => setName(e.target.value)}
      style={inputStyle}
    />
  );
};

export default Input;

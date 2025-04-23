import React from 'react';

interface BallProps {
  n: number; // número a ser exibido na bola
}

const Ball: React.FC<BallProps> = ({ n }) => {
  return (
    <div
      style={{
        width: '40px',           // Tamanho da bola
        height: '40px',          // Tamanho da bola
        backgroundColor: '#2ecc71', // Cor verde para a bola
        color: '#fff',           // Cor do número (branco)
        borderRadius: '50%',     // Deixa a div redonda
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',        // Tamanho da fonte
        fontWeight: 'bold',      // Deixa o número em negrito
        border: '2px solid #2ecc71', // Borda verde para combinar com o fundo
      }}
    >
      {n}
    </div>
  );
};

export default Ball;

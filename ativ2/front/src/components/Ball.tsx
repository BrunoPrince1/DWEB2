import React from 'react';

interface BallProps {
  letter: string;
}

const Ball: React.FC<BallProps> = ({ letter }) => {
  const ballStyle: React.CSSProperties = {
    display: 'inline-block',
    margin: '5px',
    padding: '10px',
    borderRadius: '50%',  
    backgroundColor: '#3498db',  
    color: '#fff',  
    fontSize: '18px',
    width: '35px',
    height: '35px',
    lineHeight: '40px',
    textAlign: 'center',
    border: '2px solid #3498db',  
  };

  return <span style={ballStyle}>{letter}</span>;
};

export default Ball;

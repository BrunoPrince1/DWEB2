import React from 'react';
import { NameProvider } from './NameContext';
import Input from './Input';
import Display from './Display';

const containerStyle: React.CSSProperties = {
  backgroundColor: '#222',
  padding: '20px',
  borderRadius: '10px',
  width: '320px',
  textAlign: 'center',
  marginBottom: '20px',
  border: '2px solid #3498db',
};

const Exercise1: React.FC = () => {
  return (
    <NameProvider>
      <div style={containerStyle}>
        <Input />
        <Display />
      </div>
    </NameProvider>
  );
};

export default Exercise1;

import React from 'react';
import InputForm from './InputForm';

function App() {
  function handleSubmit(value: string) {
    console.log('Submitted value:', value);
  }

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import InputForm from './InputForm';

function LoginSignup() {
  const [showInputForm, setShowInputForm] = useState(false);

  function handleButtonClick() {
    setShowInputForm(true);
  }

  function handleUser(name: string, password: string) {
    console.log('Submitted name:', name);
    console.log('Submitted password:', password);
  }


  return (
    <div>
      {!showInputForm && <button onClick={handleButtonClick}>Login/Signup</button>}
      {showInputForm && <InputForm onSubmit={handleUser} />}
    </div>
  );
}

export default LoginSignup;

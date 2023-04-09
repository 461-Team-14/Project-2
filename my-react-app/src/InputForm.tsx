import React, { useState } from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

function InputForm(props: Props) {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('http://localhost:8080/authenticate', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        User: {
          name: inputValue,
          isAdmin: true
        },
        Secret: {
          password: "strABDED34@4325Eing"
        }
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    // console.log(response)
    // const data = await response.json();
    // props.onSubmit(data.result);
    setInputValue('');
    setMessage('Text received!');
    setTimeout(() => setMessage(''), 2000); // clear message after 2 seconds
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default InputForm;

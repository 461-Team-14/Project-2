import React, { useState } from 'react';
interface Props {
  onSubmit: (name: string, password: string) => void;
}

function InputForm(props: Props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('http://localhost:8080/authenticate', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        User: {
          name: name,
          isAdmin: true
        },
        Secret: {
          password: password
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      props.onSubmit(name, password);
      setName('');
      setPassword('');
      setMessage('User Registered!');
    })
    .catch(error => console.error(error))
    setPassword('');
    setMessage('Try a different password! \nPassword must be a strong password.');
    setTimeout(() => setMessage(''), 2000); // clear message after 2 seconds
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleUser}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default InputForm;

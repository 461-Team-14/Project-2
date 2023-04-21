import React from 'react';
import InputForm from './InputForm';
import PackageUploadForm from './PackageUploadForm';

function App() {
  function handleSubmit(value: string) {
    console.log('Submitted value:', value);
  }

  function handlePackageSubmit(formData: FormData) {
    console.log('Submitted package:', formData);
  }

  function handlePackageManipulation() {
    // handle the package manipulation here
  }

  function handleCreateUser() {
    // handle creating user here
  }

  function handleReset() {
    // handle resetting the website and all values here
  }

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
      <PackageUploadForm onSubmit={handlePackageSubmit} />
      <button onClick={handlePackageManipulation}>Package Manipulation</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;


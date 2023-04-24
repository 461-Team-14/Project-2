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

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
      <PackageUploadForm onSubmit={handlePackageSubmit} />
    </div>
  );
}

export default App;
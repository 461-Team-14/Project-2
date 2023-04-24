import React from 'react';
import LoginSignup from './LoginSignup';
import PackageUploadForm from './PackageUploadForm';

function App() {
  function handlePackageSubmit(formData: FormData) {
    console.log('Submitted package:', formData);
  }

  return (
    <div>
      <LoginSignup />
      <PackageUploadForm onSubmit={handlePackageSubmit} />
    </div>
  );
}

export default App;
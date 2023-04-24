import React, { useState } from 'react';
import InputForm from './InputForm';
import PackageUploadForm from './PackageUploadForm';

function App() {
  
  const [showLoginModal, setShowLoginModal] = useState(false);

  function handleUser(name: string, password: string, isAdmin: boolean) {
    console.log('Submitted name:', name);
    console.log('Submitted password:', password);
    console.log('Is admin:', isAdmin);
    setShowLoginModal(false);
  }

  function handlePackageSubmit(formData: FormData) {
    console.log('Submitted package:', formData);
  }

  return (
    <div>
      <button onClick={() => setShowLoginModal(true)}>Login/Signup</button>
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <InputForm onSubmit={handleUser} />
          </div>
        </div>
      )}
      <PackageUploadForm onSubmit={handlePackageSubmit} />
    </div>
  );
}

export default App;

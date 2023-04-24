import React, { useState } from 'react';
import InputForm from './InputForm';
import PackageUploadForm from './PackageUploadForm';
import RegexSearch from './RegexSearch';
import './App.css'; 

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPackageMenu, setShowPackageMenu] = useState(false);

  function handleUser(name: string, password: string, isAdmin: boolean) {
    console.log('Submitted name:', name);
    console.log('Submitted password:', password);
    console.log('Is admin:', isAdmin);
    setShowLoginModal(false);
  }

  function handlePackageSubmit(formData: FormData) {
    console.log('Submitted package:', formData);
  }

  function handleRegex(regex: string) { 
    console.log('Submitted regex:', regex)
  }

  function handlePackageMenu() {
    setShowPackageMenu(!showPackageMenu);
  }

  return (
    <div className="app-container">
      <header>
        <button onClick={() => setShowLoginModal(true)}>Login/Signup</button>
      </header>
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <InputForm onSubmit={handleUser} />
          </div>
        </div>
      )}

      <PackageUploadForm onSubmit={handlePackageSubmit} />

      <button onClick={handlePackageMenu}>Package Menu</button>

      {showPackageMenu && (
        <div className="package-menu">
          <p>Package Manipulation Options:</p>
          <ul>
            <li><RegexSearch onSubmit={handleRegex} /></li>
            <li>Package Deletion</li>
            {/* Add more package manipulation options here */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

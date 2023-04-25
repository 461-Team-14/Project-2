import React, { useState } from 'react';
import InputForm from './InputForm';
import PackageUploadForm from './PackageUploadForm';
import RegexSearch from './RegexSearch';
import Reset from './Reset';
import './App.css'; 

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPackageMenu, setShowPackageMenu] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

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

  function handleResetRegistry() {
    setShowResetModal(true);
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

      <h3>Upload A Zipped Package Below.</h3>
  
      <PackageUploadForm onSubmit={handlePackageSubmit} />
  
      <button onClick={handlePackageMenu}>Package Menu</button>
  
      <button onClick={handleResetRegistry}>Reset Registry</button>
  
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
  
      {showResetModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowResetModal(false)}>&times;</span>
            <Reset onSubmit={() => setShowResetModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
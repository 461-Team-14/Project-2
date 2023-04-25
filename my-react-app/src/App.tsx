import React, { useState } from 'react';
import InputForm from './InputForm';
import PackageUploadForm from './PackageUploadForm';
import RegexSearch from './RegexSearch';
import Reset from './Reset';
import DeleteID from './DeleteID';
import './App.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPackageMenu, setShowPackageMenu] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  function handlePackageMenu() {
    setShowPackageMenu(!showPackageMenu);
  }

  function handleSearchMenu() {
    setShowSearchMenu(!showSearchMenu);
  }

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
    setSelectedPackageId(regex);
  }

  function handleResetRegistry() {
    setShowResetModal(true);
  }

  function handleUpdatePackage() {
    // Call the function to update the package with the selectedPackageId
    console.log('Updating package with ID:', selectedPackageId);
  }

  function handleInteractPackage() {
    // Call the function to interact with the package with the selectedPackageId
    console.log('Interacting with package with ID:', selectedPackageId);
  }

  function handleDeleteID(token: string, ID: string) {
    setSelectedPackageId(ID);
    console.log('Deleting package with ID:', ID, 'using auth token:', token);
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

      <button onClick={handlePackageMenu}>
        {'Interact with Packages'}
      </button>
      <button onClick={handleSearchMenu}>
        {'Search Packages'}
      </button>
      <button onClick={handleResetRegistry}>Reset Registry</button>
  
      {showPackageMenu && (
        <div className="package-menu">
          <p>Package Manipulation Options:</p>
          <ul>
            <li><button onClick={handleInteractPackage}>Get Package</button></li>
            <li><button onClick={handleUpdatePackage}>Update Package</button></li>
            <li><DeleteID onSubmit={handleDeleteID} /></li>
            {/* Add more package manipulation options here */}
          </ul>
          <button onClick={() => setShowPackageMenu(false)}>Close Menu</button>
        </div>
      )}
  
      {showSearchMenu && (
        <div className="search-menu">
          <p>Search Packages:</p>
          <ul>
            <li><RegexSearch onSubmit={handleRegex} /></li>
            {/* Add more search options here */}
          </ul>
          <button onClick={() => setShowSearchMenu(false)}>Close Menu</button>
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
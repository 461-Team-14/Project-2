import React, { useState } from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
}

function PackageUploadForm({ onSubmit }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('packageContents', file);
      onSubmit(formData);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  return (
    <form onSubmit={handleSubmit}>
    <p id="fileInputDescription">Please select Packages to Upload</p>
      <label htmlFor="fileInput" aria-label="Select zip file">Select zip file:</label>
      <br />
      <input type="file" id="fileInput" onChange={handleFileChange} accept=".zip" aria-describedby="fileInputDescription" aria-required="true" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PackageUploadForm;

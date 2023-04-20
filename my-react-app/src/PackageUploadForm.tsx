import React, { useState } from 'react';
import JSZip from 'jszip';

interface Props {
  onSubmit: (formData: FormData) => void;
}

function PackageUploadForm({ onSubmit }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();

      // Unpack the zip file
      const zip = new JSZip();
      const content = await zip.loadAsync(file);

      // Check if package.json file exists
      let hasPackageJson = false;
      const zipFileName = file.name.split('.')[0];
      Object.keys(content.files).forEach((fileName) => {
        if (fileName.toLowerCase() === 'package.json' || fileName.toLowerCase() === `${zipFileName}/package.json`) {
          hasPackageJson = true;
        }
      });

      // If package.json file is not present, throw an error
      if (!hasPackageJson) {
        throw new Error('No package.json file found in the uploaded package.');
      }

      // Get the contents of required files from the zip
      const requiredFilesData: Record<string, string> = {};
      const requiredFiles = [`${zipFileName}/package.json`, `${zipFileName}/readme.md`, `${zipFileName}/license`];
      for (const fileName of Object.keys(content.files)) {
        if (requiredFiles.includes(fileName.toLowerCase())) {
            const fileData = await content.file(fileName)?.async('string');
            if (fileData) {
                requiredFilesData[fileName] = fileData;
            }
        }
      }
      
      // Extract the name and version from package.json data
      const packageJsonData = JSON.parse(requiredFilesData[`${zipFileName}/package.json`]);
      if (!packageJsonData.homepage || typeof packageJsonData.homepage !== 'string' || packageJsonData.homepage.trim() === '') {
        throw new Error('No homepage URL found in the package.json file.');
      }
      const packageName = packageJsonData.name;
      const packageVersion = packageJsonData.version;

      // Exclude .git directory files and add the rest to the zip
      for (const fileName of Object.keys(content.files)) {
        const isExcluded = [
        '.git',
        'CVS',
        '.svn',
        '.hg',
        '.lock-wscript',
        '.wafpickle-N',
        '.*.swp',
        '.DS_Store',
        '._*',
        'npm-debug.log',
        '.npmrc',
        'node_modules',
        'config.gypi',
        '*.orig',
        'package-lock.json'
        ].some((excluded) => fileName.toLowerCase().startsWith(`${zipFileName}/${excluded.toLowerCase()}`));

        if (!isExcluded) {
        const fileData = await content.file(fileName)?.async('uint8array');
            if (fileData) {
                zip.file(fileName, fileData);
            }
        }
      }

      // Encode the package contents as Base64-encoded text
      const packageContents = await zip.generateAsync({ type: 'base64' });

      console.log(packageContents);
      console.log(packageName);
      console.log(packageVersion);

      // Add the package contents to the form data
      formData.append('packageContents', packageContents);

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

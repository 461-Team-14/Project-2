import React, { useState } from 'react';
import JSZip from 'jszip';

type Props = {
  onSubmit: (value: string) => void;
  packageJson?: string;
}

const PackageReader: React.FC<Props> = (props) => {
  const [packageFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  

  const handleButtonClick = async () => {
    if (!packageFile) {
      return;
    }

    const zip = await JSZip.loadAsync(packageFile);
    const packageJsonFile = zip.file('package.json');

    if (!packageJsonFile) {
      console.error('package.json not found in zip file');
      return;
    }

    const packageJsonContent = await packageJsonFile.async('string');
    const packageJson = JSON.parse(packageJsonContent);

    props.onSubmit(packageJson);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleButtonClick}>Read package.json</button>
      {props.packageJson && (
        <pre>{JSON.stringify(props.packageJson, null, 2)}</pre>
      )}
    </div>
  );
};

export default PackageReader;

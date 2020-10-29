import React, {useState} from 'react';
import xlsxFile from 'read-excel-file';
import './App.css';

export default function App() {
  const [excelFile, setExcelFile] = useState('');
  const [currentSheet, setCurrentSheet] = useState({});

  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    xlsxFile(file).then((rows) => {
      setExcelFile(rows)
    });
  };

  return (
    <>
    <input
      type='file'
      accept='.xlsx'
      onChange={handleUpload}
    />
     
  </>
  );
}

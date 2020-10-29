import React, {useState} from 'react';
import xlsxFile from 'read-excel-file';
import './App.css';

export default function App() {
  const [excelFile, setExcelFile] = useState('');
  const [currentline, setLine] = useState({});

  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    xlsxFile(file).then((rows) => {
      const rowFilter = rows.filter((row, index) => {
        if (index > 3) {
          return row;
        }

        return null;
      })
      
      console.table(rowFilter)
      setExcelFile(rowFilter)
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

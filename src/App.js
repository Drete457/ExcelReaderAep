import React, {useState, useEffect, useCallback} from 'react';
import exceltojson from './Components/exceltojson';

export default function App() {
  const [excelFile, setExcelFile] = useState('');
  const [currentline, setLine] = useState({});

  return (
    <>
    <input
        type='file'
        accept='.xlsx'
        onChange={(event) => {
          exceltojson(event).then(result => {
            console.log(result)
            setExcelFile(result)
          });
         
          //setExcelFile(result);
        }}

    />
  </>
  );
}

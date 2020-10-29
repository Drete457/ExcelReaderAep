import React from 'react';
import { CCol, CInputFile, CLabel } from '@coreui/react';
import exceltojson from './exceltojson';

const InputFile = ({ setExcelFile, setIsLoading }) => {
  return (
    <CCol>
      <CInputFile
        custom
        id="custom-file-input"
        accept=".xlsx"
        onChange={(event) => {
          setIsLoading(true);
          exceltojson(event).then((result) => {
            console.log(result);
            setExcelFile(result);
            setIsLoading(false);
          });
        }}
      />
      <CLabel htmlFor="custom-file-input" variant="custom-file">
        Pressiona aqui para escolheres o ficheiro
      </CLabel>
    </CCol>
  );
};

export default InputFile;

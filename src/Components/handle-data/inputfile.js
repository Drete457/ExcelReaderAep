import { CCol, CInputFile, CLabel } from '@coreui/react';
import exceltojson from './exceltojson';

const InputFile = ({ setExcelFile, setIsLoading }) => {
 
  return (
    <CCol className="d-flex justify-content-between">
        <CInputFile
          custom
          id="custom-file-input"
          accept=".xlsx"
          onChange={(event) => {
            setIsLoading(true);
            exceltojson(event).then((result) => {
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

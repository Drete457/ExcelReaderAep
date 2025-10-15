import { CCol, CInputFile, CLabel } from '@coreui/react';

const InputFile = ({ onFileSelected, isLoading }) => (
  <CCol className="d-flex justify-content-between">
    <CInputFile
      custom
      id="custom-file-input"
      accept=".xlsx"
      disabled={isLoading}
      aria-label="Selecionar ficheiro Excel"
      data-testid="excel-file-input"
      onChange={event => {
        const file = event.target.files?.[0];

        if (file && typeof onFileSelected === 'function') {
          onFileSelected(file);
        }

        // Allow re-selecting the same file consecutively.
        event.target.value = '';
      }}
    />
    <CLabel htmlFor="custom-file-input" variant="custom-file">
      Pressiona aqui para escolheres o ficheiro
    </CLabel>
  </CCol>
);

export default InputFile;

import { CCol, CFormInput, CFormLabel } from '@coreui/react';

const InputFile = ({ onFileSelected, isLoading }) => (
  <CCol className="d-flex flex-column gap-2">
    <CFormLabel htmlFor="custom-file-input" className="fw-semibold mb-0">
      Pressiona aqui para escolheres o ficheiro
    </CFormLabel>
    <CFormInput
      type="file"
      id="custom-file-input"
      accept=".xlsx"
      disabled={isLoading}
      placeholder='Selecionar ficheiro Excel'
      aria-label="Selecionar ficheiro Excel"
      data-testid="excel-file-input"
      onChange={event => {
        const file = event.target.files?.[0];

        if (file && typeof onFileSelected === 'function') {
          onFileSelected(file);
        }

        event.target.value = '';
      }}
    />
  </CCol>
);

export default InputFile;

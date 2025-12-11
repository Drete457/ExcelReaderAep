import { CCol, CFormInput, CFormLabel } from '@coreui/react';

interface InputFileProps {
  onFileSelected: (file: File) => void;
  isLoading: boolean;
}

const InputFile: React.FC<InputFileProps> = ({ onFileSelected, isLoading }) => (
  <CCol className="d-flex flex-column gap-2">
    <CFormLabel htmlFor="custom-file-input" className="fw-semibold mb-0">
      Pressiona aqui para escolheres o ficheiro
    </CFormLabel>
    <CFormInput
      type="file"
      id="custom-file-input"
      className="file-input--accent"
      accept=".xlsx"
      disabled={isLoading}
      placeholder="Selecionar ficheiro Excel"
      aria-label="Selecionar ficheiro Excel"
      data-testid="excel-file-input"
      onChange={event => {
        const file = (event.target as HTMLInputElement).files?.[0];

        if (file && typeof onFileSelected === 'function') {
          onFileSelected(file);
        }

        (event.target as HTMLInputElement).value = '';
      }}
    />
  </CCol>
);

export default InputFile;

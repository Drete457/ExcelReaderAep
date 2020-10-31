import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const ChefiaDaAlcateia = ({ result }) => {
  return (
    <>
      {result[33] || result[38] || result[43] || result[48] || result[53] || result[58] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Alcateia
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center">
          Não há Chefia da Alcateia
        </CLabel>
      )}
      {result[33] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Alcateia</CLabel>
            <CInput
              id="11"
              name="disabled-input"
              placeholder={result[33]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="12"
              name="disabled-input"
              placeholder={result[37]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[38] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Alcateia - 1</CLabel>
            <CInput
              id="13"
              name="disabled-input"
              placeholder={result[38]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="14"
              name="disabled-input"
              placeholder={result[42]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[43] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Alcateia - 2</CLabel>
            <CInput
              id="15"
              name="disabled-input"
              placeholder={result[43]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="16"
              name="disabled-input"
              placeholder={result[47]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[48] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Alcateia - 3</CLabel>
            <CInput
              id="17"
              name="disabled-input"
              placeholder={result[48]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="18"
              name="disabled-input"
              placeholder={result[52]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[53] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Alcateia - 4</CLabel>
            <CInput
              id="19"
              name="disabled-input"
              placeholder={result[53]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="20"
              name="disabled-input"
              placeholder={result[57]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[58] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Alcateia - 5</CLabel>
            <CInput
              id="20A"
              name="disabled-input"
              placeholder={result[58]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="20B"
              name="disabled-input"
              placeholder={result[62]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default ChefiaDaAlcateia;

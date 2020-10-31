import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const TribodeEscoteiros = ({ result }) => {
  return (
    <>
      {result[68] ||
      result[73] ||
      result[78] ||
      result[83] ||
      result[88] ||
      result[93] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Tribo de Escoteiros
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Tribo de Escoteiros
        </CLabel>
      )}
      {result[68] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Tribo de Escoteiros</CLabel>
            <CInput
              id="21"
              name="disabled-input"
              placeholder={result[68]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="22"
              name="disabled-input"
              placeholder={result[72]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[73] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 1</CLabel>
            <CInput
              id="23"
              name="disabled-input"
              placeholder={result[73]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="24"
              name="disabled-input"
              placeholder={result[77]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[78] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 2</CLabel>
            <CInput
              id="25"
              name="disabled-input"
              placeholder={result[78]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="26"
              name="disabled-input"
              placeholder={result[82]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[83] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 3</CLabel>
            <CInput
              id="27"
              name="disabled-input"
              placeholder={result[83]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="28"
              name="disabled-input"
              placeholder={result[87]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[88] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 4</CLabel>
            <CInput
              id="29"
              name="disabled-input"
              placeholder={result[88]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="30"
              name="disabled-input"
              placeholder={result[92]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[93] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 5</CLabel>
            <CInput
              id="30A"
              name="disabled-input"
              placeholder={result[93]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="30B"
              name="disabled-input"
              placeholder={result[97]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default TribodeEscoteiros;

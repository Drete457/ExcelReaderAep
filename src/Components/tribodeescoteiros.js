import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const TribodeEscoteiros = ({ names, bo }) => {
  
  return (
    <>
      {names[0] ||
      names[1] ||
      names[2] ||
      names[3] ||
      names[4] ||
      names[5] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Tribo de Escoteiros
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Tribo de Escoteiros
        </CLabel>
      )}
      {names[0] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Tribo de Escoteiros</CLabel>
            <CInput
              id="21"
              name="disabled-input"
              placeholder={names[0]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="22"
              name="disabled-input"
              placeholder={bo[0]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {names[1] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 1</CLabel>
            <CInput
              id="23"
              name="disabled-input"
              placeholder={names[1]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="24"
              name="disabled-input"
              placeholder={bo[1]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {names[2] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 2</CLabel>
            <CInput
              id="25"
              name="disabled-input"
              placeholder={names[2]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="26"
              name="disabled-input"
              placeholder={bo[2]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {names[3] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 3</CLabel>
            <CInput
              id="27"
              name="disabled-input"
              placeholder={names[3]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="28"
              name="disabled-input"
              placeholder={bo[3]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {names[4] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 4</CLabel>
            <CInput
              id="29"
              name="disabled-input"
              placeholder={names[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="30"
              name="disabled-input"
              placeholder={bo[4]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {names[5] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Escoteiros - 5</CLabel>
            <CInput
              id="30A"
              name="disabled-input"
              placeholder={names[5]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="30B"
              name="disabled-input"
              placeholder={bo[5]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default TribodeEscoteiros;

import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const TribodeExploradores = ({ names, bo }) => {
  
  return (
    <>
      {names[0] ||
      names[1] ||
      names[2] ||
      names[3] ||
      names[4] ||
      names[5] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Tribo de Exploradores
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Tribo de Exploradores
        </CLabel>
      )}
      {names[0] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Tribo de Exploradores</CLabel>
            <CInput
              id="31"
              name="disabled-input"
              placeholder={names[0]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="32"
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
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 1</CLabel>
            <CInput
              id="33"
              name="disabled-input"
              placeholder={names[1]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="34"
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
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 2</CLabel>
            <CInput
              id="35"
              name="disabled-input"
              placeholder={names[2]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="36"
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
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 3</CLabel>
            <CInput
              id="37"
              name="disabled-input"
              placeholder={names[3]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="38"
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
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 4</CLabel>
            <CInput
              id="39"
              name="disabled-input"
              placeholder={names[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="40"
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
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 5</CLabel>
            <CInput
              id="40A"
              name="disabled-input"
              placeholder={names[5]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="40B"
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

export default TribodeExploradores;

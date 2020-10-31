import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const Cla = ({ names, bo }) => {

  return (
    <>
      {names[0] ||
      names[1] ||
      names[2] ||
      names[3] ||
      names[4] ||
      names[5] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia de Clã
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia de Clã
        </CLabel>
      )}
      {names[0] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe de Clã</CLabel>
            <CInput
              id="41"
              name="disabled-input"
              placeholder={names[0]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="42"
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
            <CLabel>Escoteiro SubChefe de Clã - 1</CLabel>
            <CInput
              id="43"
              name="disabled-input"
              placeholder={names[1]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="44"
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
            <CLabel>Escoteiro SubChefe de Clã - 2</CLabel>
            <CInput
              id="45"
              name="disabled-input"
              placeholder={names[2]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="46"
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
            <CLabel>Escoteiro SubChefe de Clã - 3</CLabel>
            <CInput
              id="47"
              name="disabled-input"
              placeholder={names[3]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="48"
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
            <CLabel>Escoteiro SubChefe de Clã - 4</CLabel>
            <CInput
              id="49"
              name="disabled-input"
              placeholder={names[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="50"
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
            <CLabel>Escoteiro SubChefe de Clã - 5</CLabel>
            <CInput
              id="50A"
              name="disabled-input"
              placeholder={names[5]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="50B"
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

export default Cla;
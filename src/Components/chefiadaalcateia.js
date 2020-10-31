import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const ChefiaDaAlcateia = ({ names, bo}) => {

  return (
    <>
      {names[0] || names[1] || names[2] || names[3] || names[4] || names[5] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Alcateia
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Alcateia
        </CLabel>
      )}
      {names[0] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Alcateia</CLabel>
            <CInput
              id="11"
              name="disabled-input"
              placeholder={names[0]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="12"
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
            <CLabel>Escoteiro SubChefe da Alcateia - 1</CLabel>
            <CInput
              id="13"
              name="disabled-input"
              placeholder={names[1]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="14"
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
            <CLabel>Escoteiro SubChefe da Alcateia - 2</CLabel>
            <CInput
              id="15"
              name="disabled-input"
              placeholder={names[2]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="16"
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
            <CLabel>Escoteiro SubChefe da Alcateia - 3</CLabel>
            <CInput
              id="17"
              name="disabled-input"
              placeholder={names[3]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="18"
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
            <CLabel>Escoteiro SubChefe da Alcateia - 4</CLabel>
            <CInput
              id="19"
              name="disabled-input"
              placeholder={names[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="20"
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
            <CLabel>Escoteiro SubChefe da Alcateia - 5</CLabel>
            <CInput
              id="20A"
              name="disabled-input"
              placeholder={names[5]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="20B"
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

export default ChefiaDaAlcateia;

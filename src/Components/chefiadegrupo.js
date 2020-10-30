import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const ChefiaDeGrupo = ({ result }) => {
  return (
    <>
      {result[4] || result[13] || result[18] || result[23] || result[28] ? (
        <CLabel className="h3 d-flex justify-content-center pt-5">
          Chefia de Grupo
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center">
          Não há Chefia de Grupo
        </CLabel>
      )}
      {result[4] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe de Grupo</CLabel>
            <CInput
              id="1"
              name="disabled-input"
              placeholder={result[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="2"
              name="disabled-input"
              placeholder={result[12]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[13] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Grupo - 1</CLabel>
            <CInput
              id="3"
              name="disabled-input"
              placeholder={result[13]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="4"
              name="disabled-input"
              placeholder={result[17]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[18] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Grupo - 2</CLabel>
            <CInput
              id="5"
              name="disabled-input"
              placeholder={result[18]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="6"
              name="disabled-input"
              placeholder={result[22]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[23] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Grupo - 3</CLabel>
            <CInput
              id="7"
              name="disabled-input"
              placeholder={result[23]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="8"
              name="disabled-input"
              placeholder={result[27]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[28] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Grupo - 4</CLabel>
            <CInput
              id="9"
              name="disabled-input"
              placeholder={result[28]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="10"
              name="disabled-input"
              placeholder={result[32]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default ChefiaDeGrupo;

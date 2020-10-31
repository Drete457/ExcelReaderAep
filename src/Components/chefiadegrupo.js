import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const ChefiaDeGrupo = ({ names, bo }) => {

  return (
    <>
      {names[0] || names[1] || names[2] || names[3] || names[4] ? (
        <CLabel className="h3 d-flex justify-content-center pt-5">
          Chefia de Grupo
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-5">
          Não há Chefia de Grupo
        </CLabel>
      )}
      {names[0] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe de Grupo</CLabel>
            <CInput
              id="1"
              name="disabled-input"
              placeholder={names[0]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="2"
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
            <CLabel>Escoteiro SubChefe de Grupo - 1</CLabel>
            <CInput
              id="3"
              name="disabled-input"
              placeholder={names[1]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="4"
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
            <CLabel>Escoteiro SubChefe de Grupo - 2</CLabel>
            <CInput
              id="5"
              name="disabled-input"
              placeholder={names[2]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="6"
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
            <CLabel>Escoteiro SubChefe de Grupo - 3</CLabel>
            <CInput
              id="7"
              name="disabled-input"
              placeholder={names[3]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="8"
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
            <CLabel>Escoteiro SubChefe de Grupo - 4</CLabel>
            <CInput
              id="9"
              name="disabled-input"
              placeholder={names[4]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="10"
              name="disabled-input"
              placeholder={bo[4]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default ChefiaDeGrupo;

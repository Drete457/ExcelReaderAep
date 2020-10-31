import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const Cla = ({ result }) => {
  return (
    <>
      {result[133] ||
      result[138] ||
      result[143] ||
      result[148] ||
      result[153] ||
      result[158] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia de Clã
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia de Clã
        </CLabel>
      )}
      {result[133] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe de Clã</CLabel>
            <CInput
              id="41"
              name="disabled-input"
              placeholder={result[133]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="42"
              name="disabled-input"
              placeholder={result[137]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[138] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Clã - 1</CLabel>
            <CInput
              id="43"
              name="disabled-input"
              placeholder={result[138]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="44"
              name="disabled-input"
              placeholder={result[142]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[143] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Clã - 2</CLabel>
            <CInput
              id="45"
              name="disabled-input"
              placeholder={result[143]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="46"
              name="disabled-input"
              placeholder={result[147]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[148] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Clã - 3</CLabel>
            <CInput
              id="47"
              name="disabled-input"
              placeholder={result[148]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="48"
              name="disabled-input"
              placeholder={result[152]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[153] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Clã - 4</CLabel>
            <CInput
              id="49"
              name="disabled-input"
              placeholder={result[153]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="50"
              name="disabled-input"
              placeholder={result[157]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[158] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe de Clã - 5</CLabel>
            <CInput
              id="50A"
              name="disabled-input"
              placeholder={result[158]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="50B"
              name="disabled-input"
              placeholder={result[162]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default Cla;
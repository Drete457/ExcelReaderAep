import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const TribodeExploradores = ({ result }) => {
  return (
    <>
      {result[103] ||
      result[108] ||
      result[113] ||
      result[118] ||
      result[123] ||
      result[128] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Tribo de Exploradores
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Tribo de Exploradores
        </CLabel>
      )}
      {result[103] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe da Tribo de Exploradores</CLabel>
            <CInput
              id="31"
              name="disabled-input"
              placeholder={result[103]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="32"
              name="disabled-input"
              placeholder={result[107]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[108] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 1</CLabel>
            <CInput
              id="33"
              name="disabled-input"
              placeholder={result[108]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="34"
              name="disabled-input"
              placeholder={result[112]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[113] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 2</CLabel>
            <CInput
              id="35"
              name="disabled-input"
              placeholder={result[113]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="36"
              name="disabled-input"
              placeholder={result[117]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[118] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 3</CLabel>
            <CInput
              id="37"
              name="disabled-input"
              placeholder={result[118]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="38"
              name="disabled-input"
              placeholder={result[122]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[123] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 4</CLabel>
            <CInput
              id="39"
              name="disabled-input"
              placeholder={result[123]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="40"
              name="disabled-input"
              placeholder={result[127]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[128] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro SubChefe da Tribo de Exploradores - 5</CLabel>
            <CInput
              id="40A"
              name="disabled-input"
              placeholder={result[128]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="40B"
              name="disabled-input"
              placeholder={result[132]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default TribodeExploradores;

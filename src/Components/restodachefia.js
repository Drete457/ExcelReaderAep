import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const RestoDaChefia = ({ result }) => {
  return (
    <>
      {result[163] ||
      result[168] ||
      result[173] ||
      result[178] ||
      result[183] ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Outros Dirigentes
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center">
          Não há Outros Dirigentes
        </CLabel>
      )}
      {result[163] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe dos Serviços Admin.</CLabel>
            <CInput
              id="51"
              name="disabled-input"
              placeholder={result[163]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="52"
              name="disabled-input"
              placeholder={result[167]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[168] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe Adjunto da CG - 1</CLabel>
            <CInput
              id="51"
              name="disabled-input"
              placeholder={result[168]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="52"
              name="disabled-input"
              placeholder={result[172]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[173] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe Adjunto da CG - 2</CLabel>
            <CInput
              id="51"
              name="disabled-input"
              placeholder={result[173]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="52"
              name="disabled-input"
              placeholder={result[177]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[178] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe Adjunto da CG - 3</CLabel>
            <CInput
              id="51"
              name="disabled-input"
              placeholder={result[178]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="52"
              name="disabled-input"
              placeholder={result[182]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
      {result[183] && (
        <CFormGroup row className="pt-2 justify-content-center">
          <CCol md="4">
            <CLabel>Escoteiro Chefe Adjunto da CG - 4</CLabel>
            <CInput
              id="51"
              name="disabled-input"
              placeholder={result[183]}
              disabled
            />
          </CCol>
          <CCol md="4">
            <CLabel>BO</CLabel>
            <CInput
              id="52"
              name="disabled-input"
              placeholder={result[187]}
              disabled
            />
          </CCol>
        </CFormGroup>
      )}
    </>
  );
};

export default RestoDaChefia;

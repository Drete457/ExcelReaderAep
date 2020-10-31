import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const LeadersList = ({ names, bo, t1, t2 }) => {
  return names.map((name, index) => {
    return (
      <>
        {name && (
          <CFormGroup row className="pt-1 justify-content-center">
            <CCol md="4">
              <CLabel>
                {index === 0
                  ? t1
                  : t2 + index}
              </CLabel>
              <CInput id={name} placeholder={name} disabled />
            </CCol>
            <CCol md="4">
              <CLabel>BO</CLabel>
              <CInput id={index + name} placeholder={bo[index]} disabled />
            </CCol>
          </CFormGroup>
        )}
      </>
    );
  });
};

export default LeadersList;

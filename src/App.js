import React, { useState, useEffect, useCallback } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CFormText,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CBadge 
} from '@coreui/react'
import exceltojson from './Components/exceltojson';
import DefaultLayout from './View/DefaultLayout';

export default function App() {
  const [excelFile, setExcelFile] = useState('');
  const [currentline, setLine] = useState({});

  return (
    <>
      <DefaultLayout>
      <CRow className='c-app c-default-layout flex-row align-items-center'>
      <CCol sm={12} md={6} className='justify-content-center'>
        <CCard>
              <CCardHeader>blabla</CCardHeader>
              <CCardBody>
                blabla
              </CCardBody>
            </CCard>
          </CCol>
          </CRow>
       
      </DefaultLayout>
    </>
  );
}

/* <input
type="file"
accept=".xlsx"
onChange={(event) => {
  exceltojson(event).then((result) => {
    console.log(result);
    setExcelFile(result);
  });
}}
/> */
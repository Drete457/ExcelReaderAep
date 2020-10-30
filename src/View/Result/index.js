import React from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';
import ChefiaDeGrupo from '../../Components/chefiadegrupo';
import ChefiaDaAlcateia from '../../Components/chefiadaalcateia';

const Result = ({ result }) => {
  return (
    <>
      <p></p>
      <p></p>

      <CLabel className="h2 d-flex justify-content-center p-3">
        Grupo Nº: {result[0]} - Localidade: {result[2]}
      </CLabel>
      <CLabel className="h3 d-flex justify-content-center">
        Região: {result[1]}
      </CLabel>
      <ChefiaDeGrupo result={result} />
      <ChefiaDaAlcateia result={result} />
    </>
  );
};

export default Result;

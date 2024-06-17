import { Suspense, useEffect, useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from '@coreui/react';
import Select from 'react-select';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/handle-data/inputfile';
import optionList from './helpers/optionlist';
import BotaoDeCopiarTodos from './Components/botao-de-copiar-todos/botao-de-copiar-todos';
import Result from './View/Result';
import './scss/style.scss';
import responsabilityPosition from './Components/handle-data/responsability-position';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [excelFile, setExcelFile] = useState('');
  const [positionsOfEachInformation, setPositionOfEachInformation] =
    useState(undefined);
  const [currentline, setLine] = useState(undefined);
  const [listaDosNomes, setListaDosNomes] = useState([]);
  const [totalDeNomes, setTotalDeNomes] = useState(0);
  const [positions, setPositions] = useState({
    alcateia: [],
    tes: [],
    tex: [],
    cla: [],
    group: [],
    others: [],
    cgData: [],
    cfRegional: [],
    mcr: [],
    nucle: [],
  });

  function reset() {
    setExcelFile('');
    setLine(undefined);
    setIsLoading(false);
    setListaDosNomes([]);
    setTotalDeNomes(0);
  }

  useEffect(() => {
    if (positionsOfEachInformation) {
      const alcateia = [];
      const tes = [];
      const tex = [];
      const cla = [];
      const group = [];
      const others = [];
      const cgData = [];
      const cfRegional = [];
      const mcr = [];
      const nucle = [];

      positionsOfEachInformation.forEach((responsibility, index) => {
        if (responsibility === null) return;

        responsabilityPosition(
          responsibility,
          index,
          alcateia,
          tes,
          tex,
          cla,
          group,
          others,
          cgData,
          cfRegional,
          mcr,
          nucle,
        );
      });

      setPositions({
        alcateia,
        tes,
        tex,
        cla,
        group,
        others,
        cgData,
        cfRegional,
        mcr,
        nucle,
      });
    }
  }, [positionsOfEachInformation]);

  return (
    <>
      <DefaultLayout>
        <CRow className="p-3">
          <CCol sm="12" className="d-flex justify-content-center">
            <CCard>
              <CCardHeader className="h1 p-4">
                Conselho Jurisdicional - Visualizador do Controlo de Nomeações
              </CCardHeader>
              <CCardBody>
                {!isLoading && !excelFile && (
                  <InputFile
                    setExcelFile={setExcelFile}
                    setPositionOfEachInformation={setPositionOfEachInformation}
                    setIsLoading={setIsLoading}
                  />
                )}
                {!isLoading && excelFile.length > 0 && (
                  <Suspense>
                    <CCol className="d-flex justify-content-center">
                      <Select
                        className="w-50"
                        placeholder="Escolhe o grupo pretendido"
                        autoComplete="off"
                        options={optionList(excelFile)}
                        onChange={choose => {
                          const select = excelFile.find(value => {
                            if (value && value[0]) {
                              return value[0] === choose.value;
                            }
                            return null;
                          });
                          setLine(select);
                          setListaDosNomes([]);
                          setTotalDeNomes(0);
                        }}
                      />
                      <CButton
                        size="sm"
                        variant="outline"
                        color="primary"
                        onClick={() => reset()}
                      >
                        Apagar o Ficheiro
                      </CButton>
                    </CCol>
                  </Suspense>
                )}
                {currentline && (
                  <>
                    <div
                      className="botao-copiar-todos-div"
                      hidden={listaDosNomes.length === totalDeNomes}
                    >
                      <BotaoDeCopiarTodos texto={listaDosNomes} />
                    </div>
                    <Suspense>
                      <Result
                        result={currentline}
                        setListaDosNomes={setListaDosNomes}
                        setTotalDeNomes={setTotalDeNomes}
                        positions={positions}
                      />
                    </Suspense>
                  </>
                )}
                {isLoading && <LoadingScreen />}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
};

export default App;

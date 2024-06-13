import { CCol, CInputFile, CLabel } from "@coreui/react";
import exceltojson from "./exceltojson";

const getRandomTime = () => {
  const min = 10;
  const max = 45;
  const randomTime = Math.floor(Math.random() * (max - min + 1) + min);

  return randomTime * 1000;
};

const InputFile = ({
  setExcelFile,
  setPositionOfEachInformation,
  setIsLoading,
}) => {
  return (
    <CCol className="d-flex justify-content-between">
      <CInputFile
        custom
        id="custom-file-input"
        accept=".xlsx"
        onChange={(event) => {
          setIsLoading(true);
          exceltojson(event, setPositionOfEachInformation).then((result) => {
            setExcelFile(result);
            setTimeout(() => {
              setIsLoading(false);
            }, getRandomTime());
          });
        }}
      />
      <CLabel htmlFor="custom-file-input" variant="custom-file">
        Pressiona aqui para escolheres o ficheiro
      </CLabel>
    </CCol>
  );
};

export default InputFile;

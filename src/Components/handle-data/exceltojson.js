import xlsxFile from 'read-excel-file';

const exceltojson = (event, setPositionOfEachInformation) => {
  const file = event.target.files[0];
  let positionsFound = {
    index: 0,
    found: false,
    dataStart: 0,
  };

  //read excel file
  const dataFilter = xlsxFile(file).then(rows => {
    const rowsFilter = rows.filter((row, index) => {
      if (positionsFound.found) {
        if (positionsFound.dataStart === 0) {
          const dataStartFoundRow = row.find(element => {
            return element === 'Nome';
          });

          if (dataStartFoundRow) {
            positionsFound.dataStart = index;
            return null;
          }
        }

        if (index > positionsFound.dataStart) return row;
      }

      if (!positionsFound.found) {
        const positionsFoundRow = row.find(element => {
          return element === 'ECG';
        });

        if (positionsFoundRow) {
          positionsFound.index = index;
          positionsFound.found = true;

          setPositionOfEachInformation(row);
        }
      }

      return null;
    });

    return rowsFilter;
  });

  return dataFilter;
};

export default exceltojson;

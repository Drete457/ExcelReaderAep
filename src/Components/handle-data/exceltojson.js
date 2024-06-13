import xlsxFile from 'read-excel-file';

const exceltojson = (event, setPositionOfEachInformation) => {
  const file = event.target.files[0];

  //read excel file
  const dataFilter = xlsxFile(file).then((rows) => {
    const rowsFilter = rows.filter((row, index) => {
      if(index === 2) setPositionOfEachInformation(row);

      if (index > 3) {
        return row;
      }

      return null;
    });

    return rowsFilter;
  });

  return dataFilter;
};

export default exceltojson;

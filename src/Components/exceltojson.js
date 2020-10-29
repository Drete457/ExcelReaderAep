import xlsxFile from 'read-excel-file';

const exceltojson = (event) => {
  const file = event.target.files[0];

  //read excel file
  const dataFilter = xlsxFile(file).then((rows) => {
    const rowsFilter = rows.filter((row, index) => {
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

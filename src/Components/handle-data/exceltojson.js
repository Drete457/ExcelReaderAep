import xlsxFile from 'read-excel-file';

const isString = value => typeof value === 'string';

const normalizeValue = value => (isString(value) ? value.trim() : value);

const exceltojson = async file => {
  if (!file) {
    throw new Error('Nenhum ficheiro foi selecionado.');
  }

  if (!file.name?.toLowerCase().endsWith('.xlsx')) {
    throw new Error('Formato inválido. Por favor seleciona um ficheiro .xlsx.');
  }

  const rows = await xlsxFile(file);

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error('O ficheiro não contém dados para processar.');
  }

  let headerRow;
  let dataHeaderIndex = -1;
  const payloadRows = [];

  rows.forEach((rawRow, index) => {
    const row = Array.isArray(rawRow)
      ? rawRow.map(normalizeValue)
      : undefined;

    if (!row || row.length === 0) {
      return;
    }

    if (headerRow) {
      if (dataHeaderIndex === -1) {
        const hasDataHeader = row.some(cell => cell === 'Nome');
        if (hasDataHeader) {
          dataHeaderIndex = index;
        }
        return;
      }

      if (index > dataHeaderIndex) {
        payloadRows.push(row);
      }

      return;
    }

    const hasResponsibilityMarker = row.some(cell => cell === 'ECG');

    if (hasResponsibilityMarker) {
      headerRow = row;
    }
  });

  if (!headerRow) {
    throw new Error('Não foi possível localizar a linha de responsabilidades (ECG).');
  }

  if (dataHeaderIndex === -1) {
    throw new Error('Não foi possível localizar a linha de cabeçalhos (Nome).');
  }

  if (payloadRows.length === 0) {
    throw new Error('Não foram encontradas linhas de dados após a linha "Nome".');
  }

  return {
    rows: payloadRows,
    headerRow,
  };
};

export default exceltojson;

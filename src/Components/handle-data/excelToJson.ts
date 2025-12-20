import xlsxFile, { Row } from 'read-excel-file';
import type { ExcelRow, ExcelCellValue } from '@/types';

/**
 * Type guard to check if a value is a string.
 * @internal
 */
const isString = (value: unknown): value is string => typeof value === 'string';

/**
 * Normalizes Excel cell values to consistent types.
 * Trims strings and handles null/undefined/number/boolean/Date values.
 * @internal
 * 
 * @param value - Raw value from Excel cell
 * @returns Normalized value as ExcelCellValue
 */
const normalizeValue = (value: unknown): ExcelCellValue => {
  if (isString(value)) {
    return value.trim();
  }
  if (value === null || value === undefined) {
    return value as null | undefined;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }
  if (value instanceof Date) {
    return value;
  }
  return String(value);
};

/**
 * Result type from Excel to JSON conversion.
 */
interface ExcelToJsonResult {
  /** Parsed data rows (excluding header) */
  rows: ExcelRow[];
  /** Header row containing column names */
  headerRow: ExcelRow;
}

/**
 * Parses an Excel file and converts it to JSON format.
 * Validates file format, extracts header row, and normalizes all cell values.
 * 
 * @param file - Excel file to parse (.xlsx format required)
 * @returns Promise resolving to rows and headerRow
 * @throws {Error} If no file provided, invalid format, or empty file
 * 
 * @example
 * ```tsx
 * const result = await excelToJson(uploadedFile);
 * console.log(result.headerRow); // ['Name', 'Position', ...]
 * console.log(result.rows);      // [['John', 'Leader', ...], ...]
 * ```
 */
const excelToJson = async (
  file: File | undefined,
): Promise<ExcelToJsonResult> => {
  if (!file) {
    throw new Error('Nenhum ficheiro foi selecionado.');
  }

  if (!file.name?.toLowerCase().endsWith('.xlsx')) {
    throw new Error('Formato inválido. Por favor seleciona um ficheiro .xlsx.');
  }

  const rows: Row[] = await xlsxFile(file);

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error('O ficheiro não contém dados para processar.');
  }

  let headerRow: ExcelRow | undefined;
  let dataHeaderIndex = -1;
  const payloadRows: ExcelRow[] = [];

  rows.forEach((rawRow: Row, index: number) => {
    const row: ExcelRow | undefined = Array.isArray(rawRow)
      ? rawRow.map(cell => normalizeValue(cell))
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
        const rowHasContent = row.some(cell => {
          if (cell === undefined || cell === null) {
            return false;
          }

          if (typeof cell === 'string') {
            return cell.trim().length > 0;
          }

          return true;
        });

        if (rowHasContent) {
          payloadRows.push(row);
        }
      }

      return;
    }

    const hasResponsibilityMarker = row.some(cell => cell === 'ECG');

    if (hasResponsibilityMarker) {
      headerRow = row;
    }
  });

  if (!headerRow) {
    throw new Error(
      'Não foi possível localizar a linha de responsabilidades (ECG).',
    );
  }

  if (dataHeaderIndex === -1) {
    throw new Error('Não foi possível localizar a linha de cabeçalhos (Nome).');
  }

  if (payloadRows.length === 0) {
    throw new Error(
      'Não foram encontradas linhas de dados após a linha "Nome".',
    );
  }

  return {
    rows: payloadRows,
    headerRow,
  };
};

export default excelToJson;

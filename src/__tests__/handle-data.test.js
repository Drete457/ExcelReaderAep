import { beforeEach, describe, expect, it, vi } from 'vitest';
import exceltojson from '../Components/handle-data/excelToJson';
import allleaders from '../Components/handle-data/allleaders';
import allbo from '../Components/handle-data/allbo';
import cfRegionalData from '../Components/handle-data/cfRegional';
import nData from '../Components/handle-data/nucleos';
import responsabilityPosition, {
  namesToSearch,
} from '../Components/handle-data/responsability-position';

const { mockReadExcelFile } = vi.hoisted(() => ({
  mockReadExcelFile: vi.fn(),
}));

vi.mock('read-excel-file', () => ({
  __esModule: true,
  default: mockReadExcelFile,
}));

describe('exceltojson', () => {
  beforeEach(() => {
    mockReadExcelFile.mockReset();
  });

  it('normalizes content and returns header plus payload rows', async () => {
    mockReadExcelFile.mockResolvedValueOnce([
      ['Intro'],
      ['ECG', 'Another header'],
      [' Nome ', 'BO', 'Validade'],
      ['  Carlos  ', 'BO-001', ' 2025-12-31 '],
      ['', '', ''],
      ['Maria', 'BO-002', '2026-06-30'],
    ]);

    const file = { name: 'dados.xlsx' };

    const { rows, headerRow } = await exceltojson(file);

    expect(mockReadExcelFile).toHaveBeenCalledWith(file);
    expect(headerRow).toEqual(['ECG', 'Another header']);
    expect(rows).toEqual([
      ['Carlos', 'BO-001', '2025-12-31'],
      ['Maria', 'BO-002', '2026-06-30'],
    ]);
  });

  it('throws when the workbook is missing the Nome header', async () => {
    mockReadExcelFile.mockResolvedValueOnce([['ECG'], ['Outro cabeçalho']]);

    const file = { name: 'dados.xlsx' };

    await expect(exceltojson(file)).rejects.toThrow(
      'Não foi possível localizar a linha de cabeçalhos (Nome).',
    );
  });

  it('rejects when no file is provided', async () => {
    await expect(exceltojson(undefined)).rejects.toThrow(
      'Nenhum ficheiro foi selecionado.',
    );
  });
});

describe('role mapping helpers', () => {
  const resultRow = [];
  resultRow[5] = 'Chefe Alcateia';
  resultRow[6] = 'Chefe Tes';
  resultRow[7] = 'Chefe Tex';
  resultRow[8] = 'Chefe Cla';
  resultRow[9] = 'Chefe Grupo';
  resultRow[10] = 'Outro Cargo';
  resultRow[20] = 'Mandato';
  resultRow[21] = 'Validade';

  const positions = {
    alcateia: [{ namePosition: 5, bo: 30 }],
    tes: [{ namePosition: 6, bo: 31 }],
    tex: [{ namePosition: 7, bo: 32 }],
    cla: [{ namePosition: 8, bo: 33 }],
    group: [{ namePosition: 9, bo: 34 }],
    others: [{ namePosition: 10, bo: 35 }],
    cgData: [{ mandate: 20, validate: 21 }],
  };

  const boPositions = {
    alcateia: [{ bo: 40 }],
    tes: [{ bo: 41 }],
    tex: [{ bo: 42 }],
    cla: [{ bo: 43 }],
    group: [{ bo: 44 }],
    others: [{ bo: 45 }],
  };

  it('collects leader names by section', () => {
    const output = allleaders(resultRow, positions);

    expect(output).toEqual({
      alcateiaNames: ['Chefe Alcateia'],
      tesNames: ['Chefe Tes'],
      texNames: ['Chefe Tex'],
      claNames: ['Chefe Cla'],
      groupNames: ['Chefe Grupo'],
      othersNames: ['Outro Cargo'],
      cgData: ['Mandato', 'Validade'],
    });
  });

  it('collects BO values per section', () => {
    const row = [];
    row[40] = 'BO Alcateia';
    row[41] = 'BO Tes';
    row[42] = 'BO Tex';
    row[43] = 'BO Cla';
    row[44] = 'BO Grupo';
    row[45] = 'BO Outros';

    const output = allbo(row, boPositions);

    expect(output).toEqual({
      alcateiaBO: ['BO Alcateia'],
      tesBO: ['BO Tes'],
      texBO: ['BO Tex'],
      claBO: ['BO Cla'],
      groupBO: ['BO Grupo'],
      othersBO: ['BO Outros'],
    });
  });

  it('collects regional data including default MCR columns', () => {
    const row = Array.from({ length: 500 }, (_, index) => `VAL-${index}`);
    const positionsMap = {
      cfRegional: [{ namePosition: 50, bo: 51, validate: 52 }],
      mcr: [{ namePosition: 60, bo: 61, validate: 62 }],
    };

    const output = cfRegionalData(row, positionsMap);

    expect(output.cfRegional).toEqual(['VAL-50']);
    expect(output.cfBO).toEqual(['VAL-51']);
    expect(output.cfRData).toEqual(['VAL-52']);
    expect(output.mcr).toEqual([
      'VAL-403',
      'VAL-407',
      'VAL-408',
      'VAL-60',
      'VAL-61',
      'VAL-62',
    ]);
  });

  it('collects núcleo data', () => {
    const row = [];
    row[70] = 'Chefe Núcleo';
    row[71] = 'BO Núcleo';
    row[72] = 'Validade Núcleo';

    const positionsMap = {
      nucle: [{ namePosition: 70, bo: 71, validate: 72 }],
    };

    const output = nData(row, positionsMap);

    expect(output).toEqual({
      ncf: ['Chefe Núcleo'],
      nValidade: ['Validade Núcleo'],
      nBO: ['BO Núcleo'],
    });
  });
});

describe('responsabilityPosition', () => {
  it('maps responsibilities to the correct buckets with expected offsets', () => {
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

    responsabilityPosition(
      `${namesToSearch.ecg.toUpperCase()}`,
      10,
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
    responsabilityPosition(
      `função ${namesToSearch.escg}`,
      20,
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
    responsabilityPosition(
      `cargo ${namesToSearch.eca}`,
      30,
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
    responsabilityPosition(
      `cargo ${namesToSearch.eca}`,
      31,
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
    responsabilityPosition(
      `cargo ${namesToSearch.esca}`,
      32,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ectes}`,
      40,
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
    responsabilityPosition(
      `cargo ${namesToSearch.esctes}`,
      41,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ectex}`,
      50,
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
    responsabilityPosition(
      `cargo ${namesToSearch.esctex}`,
      51,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecc}`,
      60,
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
    responsabilityPosition(
      `cargo ${namesToSearch.escc}`,
      61,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecsa}`,
      70,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecacg}`,
      71,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecr}`,
      80,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecra}`,
      81,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecacr}`,
      82,
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
    responsabilityPosition(
      `cargo ${namesToSearch.pmcr}`,
      90,
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
    responsabilityPosition(
      `cargo ${namesToSearch.ecnucleo}`,
      100,
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
    responsabilityPosition(
      `cargo ${namesToSearch.escn}`,
      101,
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

    expect(group).toEqual([
      { namePosition: 10, bo: 18, validate: 15 },
      { namePosition: 20, bo: 24, validate: 25 },
    ]);
    expect(cgData).toEqual([{ validate: 15, mandate: 11 }]);
    expect(alcateia).toEqual([
      { namePosition: 30, bo: 34, validate: 35 },
      { namePosition: 32, bo: 36, validate: 37 },
    ]);
    expect(tes).toEqual([
      { namePosition: 40, bo: 44, validate: 45 },
      { namePosition: 41, bo: 45, validate: 46 },
    ]);
    expect(tex).toEqual([
      { namePosition: 50, bo: 54, validate: 55 },
      { namePosition: 51, bo: 55, validate: 56 },
    ]);
    expect(cla).toEqual([
      { namePosition: 60, bo: 64, validate: 65 },
      { namePosition: 61, bo: 65, validate: 66 },
    ]);
    expect(others).toEqual([
      { namePosition: 70, bo: 74, validate: 75 },
      { namePosition: 71, bo: 75, validate: 76 },
    ]);
    expect(cfRegional).toEqual([
      { namePosition: 80, bo: 87, validate: 88 },
      { namePosition: 81, bo: 86, validate: 87 },
      { namePosition: 82, bo: 87, validate: 88 },
    ]);
    expect(mcr).toEqual([{ namePosition: 90, bo: 95, validate: 96 }]);
    expect(nucle).toEqual([
      { namePosition: 100, bo: 105, validate: 106 },
      { namePosition: 101, bo: 106, validate: 107 },
    ]);
  });
});

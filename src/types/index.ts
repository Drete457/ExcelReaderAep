// Position types for Excel data parsing
export interface RolePosition {
  namePosition: number;
  bo: number;
  validate: number;
}

export interface CGDataPosition {
  validate: number;
  mandate: number;
}

export interface Positions {
  alcateia: RolePosition[];
  tes: RolePosition[];
  tex: RolePosition[];
  cla: RolePosition[];
  group: RolePosition[];
  others: RolePosition[];
  cgData: CGDataPosition[];
  cfRegional: RolePosition[];
  mcr: RolePosition[];
  nucle: RolePosition[];
}

// Excel data types
export type ExcelCellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined;
export type ExcelRow = ExcelCellValue[];

// Option for react-select
export interface SelectOption {
  value: string | number;
  label: string;
}

// Status types
export type StatusType = 'idle' | 'info' | 'success' | 'error';

export interface Status {
  type: StatusType;
  message: string;
}

// Leader data types
export interface LeaderData {
  alcateiaNames: ExcelCellValue[];
  tesNames: ExcelCellValue[];
  texNames: ExcelCellValue[];
  claNames: ExcelCellValue[];
  groupNames: ExcelCellValue[];
  othersNames: ExcelCellValue[];
  cgData: ExcelCellValue[];
}

export interface BOData {
  alcateiaBO: ExcelCellValue[];
  tesBO: ExcelCellValue[];
  texBO: ExcelCellValue[];
  claBO: ExcelCellValue[];
  groupBO: ExcelCellValue[];
  othersBO: ExcelCellValue[];
}

export interface RegionalData {
  cfRegional: ExcelCellValue[];
  cfBO: ExcelCellValue[];
  cfRData: ExcelCellValue[];
  mcr: ExcelCellValue[];
}

export interface NucleoData {
  ncf: ExcelCellValue[];
  nValidade: ExcelCellValue[];
  nBO: ExcelCellValue[];
}

// Component prop types
export interface CheckboxEntry {
  name: ExcelCellValue;
  checked: boolean;
}

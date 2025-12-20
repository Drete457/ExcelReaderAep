import type { RolePosition, CGDataPosition } from '@/types';

/**
 * Mapping of position abbreviations to full Portuguese role names.
 * Used for matching header row values to categorize positions.
 * 
 * @example
 * 'ecg' -> 'Escoteiro Chefe de Grupo' (Group Chief Scout)
 * 'eca' -> 'Escoteiro Chefe de Alcateia' (Pack Chief Scout)
 */
export const namesToSearch = {
  ecg: 'ecg', // Escoteiro Chefe de Grupo
  escg: 'escg', // Escoteiro Sub-Chefe de Grupo
  eca: 'eca', // Escoteiro Chefe de Alcateia
  esca: 'esca', // Escoteiro Sub-Chefe de Alcateia
  ectes: 'ectes', // Escoteiro Chefe de Tribo de Escoteiros
  esctes: 'esctes', // Escoteiro Sub-Chefe de Tribo de Escoteiros
  ectex: 'ectex', // Escoteiro Chefe de Tribo de Exploradores
  esctex: 'esctex', // Escoteiro Sub-Chefe de Tribo de Exploradores
  ecc: 'ecc', // Escoteiro Chefe de Clã
  escc: 'escc', // Escoteiro Sub-Chefe de Clã
  ecsa: 'ecsa', // Escoteiro Chefe Dos Serviços Administrativos
  ecacg: 'ecacg', // Escoteiro Chefe Adjunto de Chefe de Grupo
  ecr: 'ecr', // Escoteiro Chefe Regional
  ecra: 'ecra', // Escoteiro Chefe Regional Adjunto
  ecacr: 'ecacr', // Escoteiro Chefe Adjunto de Chefe Regional
  pmcr: 'pmcr', // Presidente da Mesa do Conselho Regional
  ecnucleo: 'ecnúcleo', // Escoteiro Chefe de Núcleo
  escn: 'escn', // Escoteiro Sub-Chefe de Núcleo
} as const;

/**
 * Context for tracking position assignment state during header parsing.
 * @internal
 */
interface ResponsabilityPositionContext {
  /** Whether Alcateia chief position has been assigned */
  alcateiaChefeAlreadyDone: boolean;
  /** Whether regional chief position has been assigned */
  chefeRegionalAlreadyDone: boolean;
}

/**
 * Categorizes a position from header row into appropriate role collection.
 * Assigns column indices for name, BO, and validation data based on position type.
 * 
 * @internal
 * @param responsibility - Position name from header row (lowercase)
 * @param index - Column index in Excel
 * @param alcateia - Collection for Alcateia (Cubs) positions
 * @param tes - Collection for Tribo de Escoteiros (Scouts) positions
 * @param tex - Collection for Tribo de Exploradores (Explorers) positions
 * @param cla - Collection for Clã (Rovers) positions
 * @param group - Collection for group-level positions
 * @param others - Collection for other/miscellaneous positions
 * @param cgData - Collection for group council data
 * @param cfRegional - Collection for regional council positions
 * @param mcr - Collection for regional council board positions
 * @param nucle - Collection for nucleus positions
 * @param context - Tracking state for special position assignments
 */
const responsabilityPosition = (
  responsibility: string,
  index: number,
  alcateia: RolePosition[],
  tes: RolePosition[],
  tex: RolePosition[],
  cla: RolePosition[],
  group: RolePosition[],
  others: RolePosition[],
  cgData: CGDataPosition[],
  cfRegional: RolePosition[],
  mcr: RolePosition[],
  nucle: RolePosition[],
  context: ResponsabilityPositionContext,
): void => {
  const responsibilityLower = responsibility.toLowerCase();

  if (responsibilityLower.includes(namesToSearch.ecg)) {
    group.push({
      namePosition: index,
      bo: index + 8,
      validate: index + 5,
    });
    cgData.push({
      validate: index + 5,
      mandate: index + 1,
    });
  }

  if (responsibilityLower.includes(namesToSearch.escg)) {
    group.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (
    !context.alcateiaChefeAlreadyDone &&
    responsibilityLower.includes(namesToSearch.eca)
  ) {
    alcateia.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
    context.alcateiaChefeAlreadyDone = true;
  }

  if (responsibilityLower.includes(namesToSearch.esca)) {
    alcateia.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ectes)) {
    tes.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.esctes)) {
    tes.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ectex)) {
    tex.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.esctex)) {
    tex.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ecc)) {
    cla.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.escc)) {
    cla.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ecsa)) {
    others.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ecacg)) {
    others.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (
    !context.chefeRegionalAlreadyDone &&
    responsibilityLower.includes(namesToSearch.ecr)
  ) {
    cfRegional.push({
      namePosition: index,
      bo: index + 7,
      validate: index + 8,
    });
    context.chefeRegionalAlreadyDone = true;
  }

  if (
    context.chefeRegionalAlreadyDone &&
    responsibilityLower.includes(namesToSearch.ecra)
  ) {
    cfRegional.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ecacr)) {
    cfRegional.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibilityLower.includes(namesToSearch.pmcr)) {
    mcr.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibilityLower.includes(namesToSearch.ecnucleo)) {
    nucle.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibilityLower.includes(namesToSearch.escn)) {
    nucle.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }
};

export default responsabilityPosition;
export type { ResponsabilityPositionContext };

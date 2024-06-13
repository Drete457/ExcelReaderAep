const namesToSearch = {
  ecg: "ecg", // Escoteiro Chefe de Grupo
  escg: "escg", // Escoteiro Sub-Chefe de Grupo
  eca: "eca", // Escoteiro Chefe de Alcateia
  esca: "esca", // Escoteiro Sub-Chefe de Alcateia
  ectes: "ectes", // Escoteiro Chefe de Tribo de Escoteiros
  esctes: "esctes", // Escoteiro Sub-Chefe de Tribo de Escoteiros
  ectex: "ectex", // Escoteiro Chefe de Tribo de Exploradores
  esctex: "esctex", // Escoteiro Sub-Chefe de Tribo de Exploradores
  ecc: "ecc", // Escoteiro Chefe de Clã
  escc: "escc", // Escoteiro Sub-Chefe de Clã
  ecsa: "ecsa", // Escoteiro Chefe Dos Serviços Administrativos
  ecacg: "ecacg", // Escoteiro Chefe Adjunto de Chefe de Grupo
  ecr: "ecr", // Escoteiro Chefe Regional
  ecra: "ecra", // Escoteiro Chefe Regional Adjunto
  ecacr: "ecacr", // Escoteiro Chefe Adjunto de Chefe Regional
  pmcr: "pmcr", // Presidente da Mesa do Conselho Regional
  ecnucleo: "ecnúcleo", // Escoteiro Chefe de Núcleo
  escn: "escn", // Escoteiro Sub-Chefe de Núcleo
};

let alcateiaChefeAlreadyDone = false;
let chefeRegionalAlreadyDone = false;
const responsabilityPosition = (
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
  nucle
) => {
  if (responsibility.toLowerCase().includes(namesToSearch.ecg)) {
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

  if (responsibility.toLowerCase().includes(namesToSearch.escg)) {
    group.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (
    !alcateiaChefeAlreadyDone &&
    responsibility.toLowerCase().includes(namesToSearch.eca)
  ) {
    alcateia.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
    alcateiaChefeAlreadyDone = true;
  }

  if (responsibility.toLowerCase().includes(namesToSearch.esca)) {
    alcateia.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ectes)) {
    tes.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.esctes)) {
    tes.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ectex)) {
    tex.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.esctex)) {
    tex.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecc)) {
    cla.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.escc)) {
    cla.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecsa)) {
    others.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecacg)) {
    others.push({
      namePosition: index,
      bo: index + 4,
      validate: index + 5,
    });
  }

  if (
    !chefeRegionalAlreadyDone &&
    responsibility.toLowerCase().includes(namesToSearch.ecr)
  ) {
    cfRegional.push({
      namePosition: index,
      bo: index + 7,
      validate: index + 8,
    });
    chefeRegionalAlreadyDone = true;
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecra)) {
    cfRegional.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecacr)) {
    cfRegional.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.pmcr)) {
    mcr.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.ecnucleo)) {
    nucle.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }

  if (responsibility.toLowerCase().includes(namesToSearch.escn)) {
    nucle.push({
      namePosition: index,
      bo: index + 5,
      validate: index + 6,
    });
  }
};

export default responsabilityPosition;

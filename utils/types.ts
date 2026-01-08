export interface ProductProperties {
  consistency: string;
  volume: string;
  shelfLife: string;
  storageTemp: string;
}

export interface InstructionRowNormal {
  type: "normal";
  cells: string[];
}

export interface InstructionRowFull {
  type: "full";
  value: string;
}

export type InstructionRow = InstructionRowNormal | InstructionRowFull;

export interface InstructionTable {
  columns: string[];
  rows: InstructionRow[];
}

export interface Description {
  composition: string;
  purpose: string;
  characteristics: string;
  form: string;
  packaging: string;
  shelfLife: string;
  compatibility: string;
}

export interface Product {
  title: string;
  price: string;
  images: string[];
  certificates: string[];
  youtubeUrl: string;
  properties: ProductProperties;
  description: Description;
  benefits: string[];
  instructionTable: InstructionTable;
}

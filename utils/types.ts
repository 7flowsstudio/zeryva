export interface ProductProperties {
  consistency: string;
  volume: string;
  shelfLife: string;
  storageTemp: string;
}

export interface InstructionTable {
  columns: string[];
  rows: string[][];
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
  youtubeUrl: string;
  properties: ProductProperties;
  description: Description;
  benefits: string[];
  instructionTable: InstructionTable;
}

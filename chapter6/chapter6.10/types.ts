export interface ReadingData {
  customer: string;
  quantity: number;
  month: number;
  year: number;
  baseCharge?: number;
  taxableCharge?: number;
}
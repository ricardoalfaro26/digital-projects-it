export interface Buro {
  success: boolean;
  message: string;
  data: BuroItem[];
}

export interface BuroItem {
  institution: string;
  state: string;
  typeOfDebt: string;
  riskCategory: string;
  amountGranted: number;
  saleDue: number;
}
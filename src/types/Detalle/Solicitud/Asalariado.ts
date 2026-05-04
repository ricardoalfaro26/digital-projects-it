export interface Asalariado {
  codigoActividadEconomica: string;
  tipoAsalariado: string;
  nombreEmpresa: string;
  cargo: string;
  salarioMensual: number;
  recibeBonos: boolean;
  cicloBonos?: string | null;
  montoBonos?: number;
  fechaIngreso: string;
  telefono: string;
  direccion: string;
  departamento: string;
  municipio: string;
}
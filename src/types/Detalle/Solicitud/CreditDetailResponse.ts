import type { Solicitud } from "./Solicitud";
import type { Comerciante } from "./Comerciante";
import type { Asalariado } from "./Asalariado";
import type { Remesas } from "./Remesas";
import type { Jubilado } from "./Jubilado";
import type { AmaDeCasaEstudiante } from "./AmaDeCasaEstudiante";
import type { Rentista } from "./Rentista";
import type { Otros } from "./Otros";

export interface CreditDetailResponse {
  solicitud: Solicitud;
  comerciante?: Comerciante;
  asalariado?: Asalariado;
  remesas?: Remesas;
  jubilado?: Jubilado;
  amaDeCasaEstudiante?: AmaDeCasaEstudiante;
  rentista?: Rentista;
  otros?: Otros;
}
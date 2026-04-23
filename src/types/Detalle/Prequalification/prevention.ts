export interface Prevention {
  success: boolean;
  data: PreventionData;
  messages: string[];
}

export interface PreventionData {
  resultado: string;
  codigoBusqueda: string;
  listasInterna: ListaResultado;
  listaInternacional: ListaResultado;
}

export interface ListaResultado {
  estado: string;
  listasPersonasCoincidencia: any[];
  listasPersonasError: any[];
}
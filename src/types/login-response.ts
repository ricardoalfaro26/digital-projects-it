export interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginData | null;
}

export interface LoginData {
  Btinreq: {
    Canal: string;
    Requerimiento: string;
    Usuario: string;
    Token: string;
    Device: string;
  };

  Sessiontoken: string;

  Erroresnegocio: {
    BTErrorNegocio: unknown[];
  };

  Btoutreq: {
    Canal: string;
    Servicio: string;
    Fecha: string;
    Hora: string;
    Requerimiento: string;
    Numero: number;
    Estado: string;
  };
}
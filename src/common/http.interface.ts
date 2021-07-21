export enum Status {
  UNDEFINED = "UNDEFINED",
  OK = "OK",
  CREATED = "CREATED",
  READED = "READED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
  NO_CONTENT = "NO_CONTENT",
  NOT_FOUND = "NOT_FOUND",
  ERROR_SERVER = "ERROR_SERVER",
}

export enum Message {
  // CRUD
  CREATED = "Se ha creado el registro correctamente.",
  READED = "Se han obtenido los registros correctamente.",
  UPDATED = "Se ha actualizado el registro correctamente.",
  DELETED = "Se ha eliminado el registro correctamente.",

  // 2xx
  OK = "La solicitud se ha realizado correctamente.",
  NO_CONTENT = "Los registros que intentas obtener al parecer no existen.",

  // 4xx
  NOT_FOUND = "El recurso al que intentas acceder al parecer no existe.",
  RESOURCE_NOT_FOUND = "El recurso(url) al que intentas acceder al parecer no existe",

  // 5xx
  ERROR_SERVER = "Estamos experiementando fallas en el servidor.",
}

export interface ResponseBase {
  ok: boolean;
  statusCode: number;
  status: Status;
  detail: string;
}

// https://datatracker.ietf.org/doc/html/rfc7807
export interface ExceptionResponse extends ResponseBase {
  type?: string;
  title?: string;
  code?: number;
}

export interface HttpResponse extends ResponseBase {
  data?: any;
}

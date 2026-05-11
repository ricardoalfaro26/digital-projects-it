// src/services/detalle.service.ts
import api from "../utils/api";
import type { Detalle } from "../types/Detalle/detalle";
import type { PrequalificationResponse } from "../types/Detalle/Prequalification/prequalification";
import type { CreditDetailResponse } from "../types/Detalle/Solicitud/CreditDetailResponse";
import type { Demografico } from "../types/Detalle/Demografico/Demografico";
import type { Evaluacion } from "../types/Detalle/Evaluacion/Evaluacion";

export const getActivityById = async (
  id: number
): Promise<Detalle> => {
    // console.log("🔥 DETALLE SERVICE LLAMADO con ID:", id);
  const response = await api.get(`/dashboard/activity/${id}`);

  return response.data.data;
};

export const getPrequalificationById = async (
  id: number
): Promise<PrequalificationResponse> => {
  // console.log("🔥 PREQUALIFICATION SERVICE LLAMADO con ID:", id);

  const response = await api.get(
    `/application-process/prequalification/${id}`
  );

  return response.data.data;
}

export const getApplicationByNumeroSolicitud = async (
  numeroSolicitud: string
): Promise<CreditDetailResponse | null> => {

  if (!numeroSolicitud) return null;
  const response = await api.get(
    `/application-process/application/${numeroSolicitud}`
  );

  return response.data.data;
};

export const getDemograficoByNumeroPreSolicitud = async (
  numberoPreSolicitud: string
): Promise<Demografico> => {

  const response = await api.get(
    `/application-process/demographic/${numberoPreSolicitud}`
  );

  return response.data.data;
}

export const getEvaluacionByNumeroPreSolicitud = async (
  numeroPreSolicitud: string
): Promise<Evaluacion> => {
  const response = await api.get(
    `/evaluation/information/${numeroPreSolicitud}`
  );
  return response.data.data;
}
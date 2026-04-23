// src/services/detalle.service.ts
import api from "../utils/api";
import type { Detalle } from "../types/Detalle/detalle";
import type { PrequalificationResponse } from "../types/Detalle/Prequalification/prequalification";

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
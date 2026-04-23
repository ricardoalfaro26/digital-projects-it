// src/services/detalle.service.ts
import api from "../utils/api";
import type { Detalle } from "../types/Detalle/detalle";

export const getActivityById = async (
  id: number
): Promise<Detalle> => {
    console.log("🔥 DETALLE SERVICE LLAMADO con ID:", id);
  const response = await api.get(`/dashboard/activity/${id}`);

  return response.data.data;
};
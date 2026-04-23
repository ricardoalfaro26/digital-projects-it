import api from "../utils/api";
import type { DashboardSummary } from "../types/Dashboard/dashboard";
import type { DashboardActivity } from "../types/Dashboard/DashboardActivity";

export const getSummary = async (): Promise<DashboardSummary> => {
  const response = await api.get("/dashboard/summary");

  // 👇 extraes solo el data real del backend
  return response.data.data;
};

export const getActivities = async (
  params?: { startDate?: string; endDate?: string; client?: string }
): Promise<DashboardActivity[]> => {
  const response = await api.get("/dashboard/activity", { params }); // ✅ CORRECTO
  return response.data.data;
};
import api from "../utils/api";
import type { LoginRequest } from "../types/login-request";
import type { LoginResponse } from "../types/login-response";


export const login = async (
  payload: LoginRequest
): Promise<LoginResponse> => {

  const response = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return response.data;
};
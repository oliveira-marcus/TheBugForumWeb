import api from "./api";
import type {
  LoginRequestBody,
  LoginResponse,
  RegisterRequestBody,
  RegisterResponse,
} from "./types/auth.types";

export async function register(
  data: RegisterRequestBody
): Promise<RegisterResponse> {
  const response = await api.post<RegisterResponse>("/users/register", {
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: data.password,
  });

  return response.data;
}

export async function login(data: LoginRequestBody): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/users/login", {
    username: data.username.trim(),
    password: data.password,
  });

  return response.data;
}

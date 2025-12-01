export interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    createdAt: string;
  };
}

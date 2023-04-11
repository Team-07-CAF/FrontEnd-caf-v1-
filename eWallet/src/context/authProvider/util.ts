import { Api } from "../../services/api/Api";

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post("login", {email, password});

    return request.data;
  } catch (error) {
    return null;
  }
}

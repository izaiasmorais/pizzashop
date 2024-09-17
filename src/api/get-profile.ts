import { api } from "@/lib/axios";

interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createAt: Date | null;
  updateAt: Date | null;
  role: "manager" | "customer";
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>("/me");

  return response.data;
}

import { api } from "@/lib/axios";

interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createAt: Date | null;
  updateAt: Date | null;
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>("/me");

  return response.data;
}

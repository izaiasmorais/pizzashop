import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  createAt: Date | null;
  updateAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    "/managed-restaurant",
  );

  return response.data;
}

import { http, HttpResponse } from "msw";
import type { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/me", () => {
  return HttpResponse.json({
    id: "customer-restaurant-id",
    name: "Pizza Shop",
    description: "John Doe's restaurant",
    managerId: "manager-id",
    createAt: new Date(),
    updateAt: null,
  });
});

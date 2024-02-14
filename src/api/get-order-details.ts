import { api } from "@/lib/axios";

export interface OrderDetailsParams {
  orderId: string;
}

export interface getOrderDetailsResponse {
  id: string;
  createdAt: null;
  status: "pending" | "processing" | "delivering" | "canceled" | "delivered";
  totalCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
  }[];
}

export async function getOrderDetails({ orderId }: OrderDetailsParams) {
  const response = await api.get<getOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}

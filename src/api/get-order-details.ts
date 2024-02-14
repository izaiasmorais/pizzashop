import { api } from "@/lib/axios";

export interface OrderDetailsParams {
  orderId: string;
}

export interface getOrderDetailsResponse {
  id: string;
  createdAt: string;
  status: "pending" | "processing" | "delivering" | "canceled" | "delivered";
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
		quantity: number;
		product: {
			name: string;
		}
	}[];
}

export async function getOrderDetails({ orderId }: OrderDetailsParams) {
  const response = await api.get<getOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}

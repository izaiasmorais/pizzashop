import { api } from "@/lib/axios";

export interface GetMonthCancelledOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCancelledOrdersAmount() {
  const response = await api.get<GetMonthCancelledOrdersAmountResponse>(
    "/metrics/month-cancelled-orders-amount",
  );

  return response.data;
}

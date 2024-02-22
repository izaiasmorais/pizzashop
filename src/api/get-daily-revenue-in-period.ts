import { api } from "@/lib/axios";

export interface getDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export type GetDailyRevenueInPeriodResponse = {
  data: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeriod({
  from,
  to,
}: getDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    "/metrics/daily-receipt-in-period",
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
}

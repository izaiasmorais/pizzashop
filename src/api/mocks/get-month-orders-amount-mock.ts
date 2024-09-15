import { http, HttpResponse } from "msw";
import type { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  });
});

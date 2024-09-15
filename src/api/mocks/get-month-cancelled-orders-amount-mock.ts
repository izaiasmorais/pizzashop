import { http, HttpResponse } from "msw";
import type { GetMonthCancelledOrdersAmountResponse } from "../get-month-cancelled-orders-amount";

export const getMonthCancelledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCancelledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  });
});

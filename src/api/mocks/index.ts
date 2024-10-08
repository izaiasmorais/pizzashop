import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurente-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getMonthCancelledOrdersAmountMock } from "./get-month-cancelled-orders-amount-mock";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getOrderDetailsMock } from "./get-orders-details-mock";
import { getProfileMock } from "./get-profile-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCancelledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getOrdersMock,
  getOrderDetailsMock,
  getProfileMock,
  updateProfileMock,
  getManagedRestaurantMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}

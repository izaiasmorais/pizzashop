import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrderAmountCard } from "./month-orders-amount-card";
import { DayOrderAmountCard } from "./day-order-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  );
}

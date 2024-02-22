import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">246</span>

            {monthOrdersAmount.diffFromLastMonth >= 0 && (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{monthOrdersAmount.diffFromLastMonth}%
                </span>{" "}
                em relação ao mês passado
              </p>
            )}

            {monthOrdersAmount.diffFromLastMonth < 0 && (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">
                  {monthOrdersAmount.diffFromLastMonth}%
                </span>{" "}
                em relação ao mês passado
              </p>
            )}
          </>
        )}

        {!monthOrdersAmount && <MetricCardSkeleton />}
      </CardContent>
    </Card>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getMonthCancelledOrdersAmount } from "@/api/get-month-cancelled-orders-amount";

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCancelledOrdersAmount } = useQuery({
    queryFn: getMonthCancelledOrdersAmount,
    queryKey: ["metrics", "month-cancelled-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos cancelados (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCancelledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">246</span>

            {monthCancelledOrdersAmount.diffFromLastMonth < 0 && (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{monthCancelledOrdersAmount.diffFromLastMonth}%
                </span>{" "}
                em relação ao mês passado
              </p>
            )}

            {monthCancelledOrdersAmount.diffFromLastMonth >= 0 && (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">
                  +{monthCancelledOrdersAmount.diffFromLastMonth}%
                </span>{" "}
                em relação ao mês passado
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

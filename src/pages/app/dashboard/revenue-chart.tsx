import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  YAxis,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  LineChart,
} from "recharts";

const data = [
  { date: "01/01", revenue: 1000 },
  { date: "01/02", revenue: 560 },
  { date: "01/03", revenue: 1250 },
  { date: "01/04", revenue: 1015 },
  { date: "01/05", revenue: 1340 },
  { date: "01/06", revenue: 1500 },
  { date: "01/07", revenue: 1100 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período.</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.rose["500"]}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <Tooltip
              contentStyle={{
                background: "#000",
                border: "none",
                borderRadius: "1px",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

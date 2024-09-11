export type OrderStatus =
  | "pending"
  | "delivering"
  | "processing"
  | "delivered"
  | "cancelled";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  delivering: "Em entrega",
  processing: "Em preparo",
  delivered: "Entregue",
  cancelled: "Cancelado",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}

      {status === "cancelled" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}

      {status === "delivered" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}

      {["processing", "delivering"].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}

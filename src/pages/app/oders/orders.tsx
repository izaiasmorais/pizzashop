import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros: </span>
            <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
          </form>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[200px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium">
                    d0afd1dd4b4744d5ac03
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    Há 15 min
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400 " />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">
                    Izaías de Melo Lima Morais
                  </TableCell>
                  <TableCell className="font-medium">R$ 149,90</TableCell>
                  <TableCell>
                    <Button variant="outline">
                      <ArrowRight className="mr-3 h-3 w-3" />
                      Aprovar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 h-3 w-3" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

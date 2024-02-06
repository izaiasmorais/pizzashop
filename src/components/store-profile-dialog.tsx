import {
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import {
  GetManagedRestaurantResponse,
  getManagedRestaurant,
} from "@/api/get-managed-restaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "@/api/update-profile";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { z } from "zod";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const queryClient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  function updateManagedRestaurantCache({
    description,
    name,
  }: StoreProfileSchema) {
    const cashed = queryClient.getQueryData<GetManagedRestaurantResponse>([
      "managed-restaurant",
    ]);

    if (cashed) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ["managed-restaurant"],
        {
          ...cashed,
          name,
          description,
        },
      );
    }

    return { cashed };
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cashed } = updateManagedRestaurantCache({ name, description });

      return { previusProfile: cashed };
    },
    onError(_, __, context) {
      if (context?.previusProfile) {
        updateManagedRestaurantCache(context.previusProfile);
      }
    },
  });

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Não foi possível atualizar o perfil");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>

        <DialogDescription>
          Atualiza as informações do seu estabelecimento visíveis ao seu
          cliente.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

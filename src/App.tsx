import "./global.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { router } from "./routes";
import { Toaster } from "@/components/ui/sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

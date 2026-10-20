import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { router } from "./router";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TooltipProvider delayDuration={200} skipDelayDuration={0}>
    <RouterProvider router={router} />
  </TooltipProvider>,
);

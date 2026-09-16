import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Parents from "./pages/Parents";

export default function App() {
  const isParents = window.location.pathname === "/parents";
  return <ErrorBoundary><TooltipProvider><Toaster position="top-center" />{isParents ? <Parents /> : <Home />}</TooltipProvider></ErrorBoundary>;
}

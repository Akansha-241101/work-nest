import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 py-10">
      <EmptyState
        title="Page not found"
        description="That path isn't part of Work Nest yet."
      />
      <Button type="button" onClick={() => navigate("/dashboard")}>
        Back to dashboard
      </Button>
    </div>
  );
}

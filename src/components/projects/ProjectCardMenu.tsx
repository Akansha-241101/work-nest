import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

type ProjectCardMenuProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export function ProjectCardMenu({ onEdit, onDelete }: ProjectCardMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="More Options"
          className="size-8 shrink-0 rounded-[0.45rem]"
        >
          <MoreHorizontalIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-[0.675rem]">
        <DropdownMenuItem
          onClick={onEdit}
          className="cursor-pointer text-[0.7875rem]"
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          variant="destructive"
          onClick={onDelete}
          className="cursor-pointer text-[0.7875rem]"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

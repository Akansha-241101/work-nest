import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { EmptyState } from "@/components/shared/EmptyState";
import { PillTabs } from "@/components/shared/PillTabs";
import { TaskCard } from "@/components/tasks/TaskCard";
import { Button } from "@/components/ui/Button";
import { NAV_ICONS } from "@/constants/assets";
import { TASKS } from "@/data/tasks";
import { useToast } from "@/hooks/use-toast";
import type { Task, TaskStatus } from "@/types/task";

const FILTERS: { value: "all" | TaskStatus; label: string }[] = [
  { value: "all", label: "All" },
  { value: "todo", label: "To do" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
];

export function TasksPage() {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [filter, setFilter] = useState<"all" | TaskStatus>("all");

  const visible = useMemo(
    () =>
      filter === "all" ? tasks : tasks.filter((task) => task.status === filter),
    [filter, tasks],
  );

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "todo" : "done" }
          : task,
      ),
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.tasks}
        title="Tasks"
        description="Stay on top of what needs doing next."
        actions={
          <Button
            type="button"
            onClick={() =>
              toast({
                icon: <Plus className="size-4" />,
                title: "Add task coming soon",
                description: "Task creation will connect to the backend later.",
                actionType: "pending",
              })
            }
          >
            <Plus className="size-4" aria-hidden="true" />
            Add task
          </Button>
        }
      />

      <PillTabs
        label="Filter tasks"
        value={filter}
        options={FILTERS}
        onChange={setFilter}
      />

      {visible.length === 0 ? (
        <EmptyState
          title="No tasks here"
          description="Try another filter or add a new task."
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {visible.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </div>
      )}
    </div>
  );
}

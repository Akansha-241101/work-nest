import { Check } from "lucide-react";
import { useState } from "react";
import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { ILLUSTRATIONS } from "@/constants/assets";
import { TODO_ITEMS } from "@/data/dashboard";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function TodoList() {
  const { toast } = useToast();
  const [todos, setTodos] = useState(TODO_ITEMS);

  function toggleTodo(id: string) {
    setTodos((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function showComingSoon() {
    toast({
      icon: <span aria-hidden="true">⏳</span>,
      title: "Adding tasks is coming soon",
      description: "You'll be able to add your own to-dos here.",
      actionType: "pending",
    });
  }

  return (
    <section
      aria-labelledby="todo-title"
      className={cn(CLAY_CARD, claySurface("pink"), "p-7")}
    >
      <div className="flex items-center justify-between">
        <h2 id="todo-title" className="text-lg font-bold">
          To-Do List
        </h2>
        <button
          type="button"
          aria-label="Add task"
          onClick={showComingSoon}
          className="cursor-pointer rounded-xl transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
        >
          <img
            src={ILLUSTRATIONS.plus}
            alt=""
            draggable={false}
            className={cn(CLAY_ICON, "size-9")}
          />
        </button>
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-card px-3 py-2.5 text-sm font-semibold shadow-clay-sm">
              <span className="relative flex size-5 shrink-0">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                  className="peer size-5 cursor-pointer appearance-none rounded-md border-2 border-clay-pink-ink/45 bg-card transition-colors checked:border-chart-2 checked:bg-chart-2"
                />
                <Check
                  aria-hidden="true"
                  strokeWidth={3.5}
                  className="pointer-events-none absolute inset-0.5 size-4 text-white opacity-0 peer-checked:opacity-100"
                />
              </span>
              <span className="truncate">{todo.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

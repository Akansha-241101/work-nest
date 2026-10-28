import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { MeetingsPage } from "@/pages/MeetingsPage";
import { MessagesPage } from "@/pages/MessagesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { TasksPage } from "@/pages/TasksPage";
import { TeamPage } from "@/pages/TeamPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/tasks", element: <TasksPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/analytics", element: <AnalyticsPage /> },
      { path: "/messages", element: <MessagesPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/meetings", element: <MeetingsPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

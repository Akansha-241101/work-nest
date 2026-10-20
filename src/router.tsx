import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardPage } from "@/pages/DashboardPage";
import { MeetingsPage } from "@/pages/MeetingsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectTimelinePage } from "@/pages/projects/ProjectTimelinePage";
import { ProjectsPage } from "@/pages/projects/ProjectsPage";
import { ProjectWorkspacePage } from "@/pages/projects/ProjectWorkspacePage";
import { SettingsPage } from "@/pages/SettingsPage";
import { TeamPage } from "@/pages/TeamPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:projectId", element: <ProjectWorkspacePage /> },
      {
        path: "/projects/:projectId/timeline",
        element: <ProjectTimelinePage />,
      },
      { path: "/team", element: <TeamPage /> },
      { path: "/meetings", element: <MeetingsPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

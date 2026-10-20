import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { PlaceholderPage } from "./components/PlaceholderPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      {
        path: "/dashboard",
        element: <PlaceholderPage title="Overview Dashboard" />,
      },
      { path: "/projects", element: <PlaceholderPage title="Projects" /> },
      {
        path: "/projects/:projectId",
        element: <PlaceholderPage title="Project Workspace" />,
      },
      {
        path: "/projects/:projectId/timeline",
        element: <PlaceholderPage title="Project Timeline" />,
      },
      { path: "/team", element: <PlaceholderPage title="Team Management" /> },
      { path: "/meetings", element: <PlaceholderPage title="Meetings" /> },
      {
        path: "/settings",
        element: <PlaceholderPage title="Settings & Profile" />,
      },
      { path: "*", element: <PlaceholderPage title="Page not found" /> },
    ],
  },
]);

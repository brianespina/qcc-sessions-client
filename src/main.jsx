import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Dashboard from "./routes/Dashboard";
import Sessions from "./routes/Sessions";
import Lessons from "./routes/Lessons";
import Members from "./routes/Members";
import NotFound from "./routes/NotFound";
import SessionArchive from "./routes/SessionArchive";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        handle: {
          title: "Dashboard",
        },
      },
      {
        path: "/sessions",
        children: [
          {
            index: true,
            element: <Sessions />,
            handle: {
              title: "Sessions",
            },
          },
          {
            path: "archived",
            element: <SessionArchive />,
            handle: {
              title: "Archived Sessions",
            },
          },
        ],
      },
      {
        path: "/lessons",
        element: <Lessons />,
        handle: {
          title: "Lessons",
        },
      },
      {
        path: "/members",
        element: <Members />,
        handle: {
          title: "Members",
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

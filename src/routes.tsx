import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./pages/_layouts/base";
import { ListAppointments } from "./pages/app/list-appointments";
import { ListPatients } from "./pages/app/list-patients";
import { HomePage } from "./pages/app/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "consultas",
        element: <ListAppointments />,
      },
      {
        path: "pacientes",
        element: <ListPatients />,
      }
    ]
  }
])
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./pages/_layouts/base";
import { ListAppointments } from "./pages/app/list-appointments";
import { ListPatients } from "./pages/app/list-patients";
import { HomePage } from "./pages/app/homepage";
import { Login } from "./pages/app/login";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "consultas",
        element: <ListAppointments />,
      },
      {
        path: "pacientes",
        element: <ListPatients />,
      },
    ],
  },
]);

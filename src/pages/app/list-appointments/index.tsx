import { useState, useEffect } from "react";
import { IAppointment } from "../../../models/Appointments";
import api from "../../../api";
import { AppointmentCard } from "./components/appointment-card";

export function ListAppointments() {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token não encontrado. Faça o login novamente.");
          return;
        }

        const response = await api.get("/appointments/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAppointments(response.data);
      } catch (error) {
        alert(`Erro ao buscar os dados: ${error}`);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Lista de Consultas</h1>

      <div className="grid grid-cols-4 gap-8">
        {appointments.map((appointment) => (
          <AppointmentCard appointment={appointment} />
        ))}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { IAppointment } from "../../../models/Appointments";
import api from "../../../api";

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
        console.error("Erro ao buscar os dados", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <h1>Lista de Consultas</h1>
      {appointments.map((appointment, id) => (
        <div key={id}>
          {appointment.patient.name} - {appointment.dentist.name}
        </div>
      ))}
    </>
  );
}

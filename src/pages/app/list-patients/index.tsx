import { useEffect, useState } from "react";
import { IPatient } from "../../../models/Users";
import api from "../../../api";

export function ListPatients() {
  const [patients, setPatients] = useState<IPatient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token não encontrado. Faça o login novamente.");
          return;
        }

        const response = await api.get("/users/patients/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPatients(response.data);
      } catch (error) {
        alert(`Erro ao buscar dados dos pacientes: ${error}`);
      }
    };

    fetchPatients();
  }, []);

  return (
    <>
      <h1>Lista de Pacientes</h1>
      {patients.map((patient, id) => (
        <div key={id}>
          <p>{patient.name}</p>
        </div>
      ))}
    </>
  );
}

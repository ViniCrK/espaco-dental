import { useEffect, useState } from "react";
import { IPatient } from "../../../models/Users";
import api from "../../../api";
import { PatientCard } from "./components/patient-card";

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
      <h1 className="text-3xl font-bold mb-8">Lista de Pacientes</h1>

      <div className="grid grid-cols-4 gap-8">
        {patients.map((patient, id) => (
          <div key={id}>
            <PatientCard patient={patient} />
          </div>
        ))}
      </div>
    </>
  );
}

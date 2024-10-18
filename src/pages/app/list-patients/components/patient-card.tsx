import { IPatient } from "../../../../models/Users";

interface PatientCardProps {
  patient: IPatient;
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-zinc-800">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="src\assets\espaco-dental-logo.jpg"
          alt="Imagem do paciente"
        />
        <div className="px-5 py-5">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {patient.name}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {patient.phone}
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {patient.email}
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {patient.gender === "m" ? "Masculino" : "Feminino"}
          </p>
        </div>
      </div>
    </>
  );
}

import { IDentist, IPatient } from "../../../../models/Users";

interface AppointmentCardProps {
  patient: IPatient;
  dentist: IDentist;
}

export function AppointmentCard({ patient, dentist }: AppointmentCardProps) {
  return (
    <>
      <h1>Nome do Paciente: {patient.name}</h1>
      <h1>Nome do Dentista: {dentist.name}</h1>
    </>
  )
}
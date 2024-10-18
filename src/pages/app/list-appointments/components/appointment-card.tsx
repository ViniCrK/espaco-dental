import { IAppointment } from "../../../../models/Appointments";

interface AppointmentCardProps {
  appointment: IAppointment;
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
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
            {appointment.patient.name}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Dentista: {appointment.dentist.name}
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Procedimento(s):{" "}
            {appointment.procedures_done.map((procedure) => procedure.name)}
          </p>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Status: {appointment.status.toUpperCase()}
          </p>

          <div className="flex justify-between items-end">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Marcada para: {appointment.date}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-sky-900 text-white hover:bg-sky-700 font-semibold py-2 px-4 rounded">
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

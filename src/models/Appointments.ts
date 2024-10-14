import { IDentist, IPatient } from "./Users";

export interface IAppointment {
  patient: IPatient;
  dentist: IDentist;
  date: string;
  appointment_occasion: string;
  diagnosis: string;
  procedures_done: IProcedure[];
  status: string;
  created_at: string;
}

export interface IProcedure {
  name: string;
  description: string;
  cost: number;
}
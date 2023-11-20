export interface DoctorForm {
  id: number;
  specialty: string;
  name: string;
  phone: string;
  monday: number,
  tuesday: number,
  wednesday: number,
  thursday: number,
  friday: number,
  saturday: number,
  sunday: number
}

export interface UserForm {
  id: number;
  name: string;
  phone: string;
  email: string;
  medical_plan: string
}
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header, CalendarioConsulta } from '../../components';
import {
  Content,
  Title,
  TextArea,
  FormContent,
  Input,
  ContentCalendar,
  Text,
  Button,
  ContentButton,
} from './styles';
import { DoctorForm } from './formProps';

interface DoctorFormProps {
  id: string;
}

const FormDoctor: React.FC<DoctorFormProps> = ({ id }) => {
  const navigate = useNavigate();

  const [doctorForm, setDoctorForm] = useState<DoctorForm | null>(null);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    medicalPlan: '',
    email: '',
    phone: '',
    selectedDay: '',
    selectedTime: '',
  });

  let diasDisponiveis = {
    Segunda: 0,
    Terca: 0,
    Quarta: 0,
    Quinta: 0,
    Sexta: 0,
    Sabado: 0,
    Domingo: 0,
  };

  const userId = localStorage.getItem('userId');

  const handleAppointmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/appointments',
        {
          doctorId: doctorForm?.id,
          userId: userId,
          medicalPlan: appointmentData.medicalPlan,
          email: appointmentData.email,
          phone: appointmentData.phone,
          medical_Appointment: `${appointmentData.selectedDay} - ${appointmentData.selectedTime}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate(`/`);
      console.log('Appointment created:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  useEffect(() => {
    const fetchDoctorForm = async (doctorId: string) => {
      try {
        const response = await axios.get('http://localhost:3001/api/doctor', {
          params: { id: doctorId },
        });

        console.log('Dados do médico:', response.data);

        if (response.data.length > 0) {
          setDoctorForm(response.data[0]);
        } else {
          setDoctorForm(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchDoctorForm(id);
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (day: string, time: string) => {
    setAppointmentData({
      ...appointmentData,
      selectedDay: day,
      selectedTime: time,
    });
  };

  if (doctorForm !== null) {
    diasDisponiveis = {
      Segunda: doctorForm.monday,
      Terca: doctorForm.tuesday,
      Quarta: doctorForm.wednesday,
      Quinta: doctorForm.thursday,
      Sexta: doctorForm.friday,
      Sabado: doctorForm.saturday,
      Domingo: doctorForm.sunday,
    };
  }

  return (
    <div>
      <Header />
      <Content>
        {doctorForm ? (
          <>
            <TextArea>
              <Title>{doctorForm.name} - {doctorForm.specialty}</Title>
            </TextArea>
            <FormContent>
              <form onSubmit={handleAppointmentSubmit}>
                <Input
                  $size
                  placeholder='Nome Completo'
                  name='name'
                  onChange={handleInputChange}
                />
                <Input
                  placeholder='Plano Médico'
                  name='medicalPlan'
                  onChange={handleInputChange}
                />
                <Input
                  $size
                  placeholder='E-mail'
                  name='email'
                  onChange={handleInputChange}
                />
                <Input
                  placeholder='Telefone'
                  name='phone'
                  onChange={handleInputChange}
                />
                <ContentCalendar>
                  <TextArea>
                    <Text $size>Calendário da Semana</Text>
                    <Text>O calendário para agendamento de consulta é liberado apenas semanalmente</Text>
                  </TextArea>
                  <CalendarioConsulta
                    diasDisponiveis={diasDisponiveis}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </ContentCalendar>
                <ContentButton>
                  <Button type='submit' disabled={!doctorForm}>Agendar</Button>
                </ContentButton>
              </form>
            </FormContent>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </Content>
    </div>
  );
};

export default FormDoctor;

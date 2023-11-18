import React, { useEffect, useState } from 'react';
import { Header, DoctorCard } from '../../components';
import { Content, ContentDoctors } from './styles';

interface Doctor {
  id: number;
  specialty: string;
  name: string;
  rating: number;
}

function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const apiUrl = 'http://localhost:3001/api/doctors';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Dados recebidos:', data);
        setDoctors(data);
      })
      .catch(error => console.error('Erro ao obter dados:', error));
  }, []);

  return (
    <div>
      <Header />
      <Content>
        <ContentDoctors>
          <div>
            <h1>Doctors</h1>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </ContentDoctors>
      </Content>
    </div>
  );
}

export default Home;

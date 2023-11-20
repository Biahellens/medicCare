import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, DoctorCard } from '../../components';
import { Content, ContentDoctors, SearchDiv, Search, Button, Title} from './styles';

interface Doctor {
  id: number;
  specialty: string;
  name: string;
  rating: number;
}

function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState('');
  const [doctorResults, setDoctorResults] = useState<Doctor[]>([]);
  const [searchState, setSearchState] = useState<boolean>(false);

  const apiUrl = 'http://localhost:3001';

  useEffect(() => {
    fetch(apiUrl+'/api/doctors')
      .then(response => response.json())
      .then(data => {
        console.log('Dados recebidos:', data);
        setDoctors(data);
      })
      .catch(error => console.error('Erro ao obter dados:', error));
  }, []);


  const handleSearch = async () => {
    try {
      console.log('Botão clicado');
      const response = await axios.get(apiUrl+'/api/search', {
        params: { termo: search },
      });

      setSearchState(true)
      setDoctorResults(response.data);
    } catch (error) {
      console.error('Erro ao pesquisar:', error);
    }
  };

  return (
    <div>
      <Header />
      <Content>
        <SearchDiv>
          <Search
            placeholder="Pesquisar um médico..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch}>
            Pesquisar
          </Button>
        </SearchDiv>
        <Title>Doctors</Title>
        <ContentDoctors>
          {!searchState && (
            <>
              {doctors.map((doctor: Doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </>
          )}
          {searchState && (
            <>
              {doctorResults.map((doctorResult: Doctor) => (
                <DoctorCard key={doctorResult.id} doctor={doctorResult} />
              ))}
            </>
          )}
        </ContentDoctors>
      </Content>
    </div>
  );
}

export default Home;

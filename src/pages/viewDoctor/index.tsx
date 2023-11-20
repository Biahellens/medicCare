import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DoctorComplete } from '../../components/doctorCard/doctorProps';
import { Header } from '../../components'
import { Content, ContentImage, Image, TextArea, Text, ContentCalendar, ContentStars, Button, Linkinho} from './styles'
import doctor from '../../assets/doctor.svg'
import starsOne from '../../assets/startsOne.png';
import starsTwo from '../../assets/startsTwo.png';
import starsThree from '../../assets/startsThree.png';
import starsFour from '../../assets/startsFour.png';
import starsFive from '../../assets/startsFive.png';
import phone from '../../assets/phone.svg'

interface DoctorDetailsProps {
  id: string;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({ id }) => {
  const [doctorDetails, setDoctorDetails] = useState<DoctorComplete | null>(null);

  const ratingImages: Record<number, string> = {
    1: starsOne,
    2: starsTwo,
    3: starsThree,
    4: starsFour,
    5: starsFive,
  };

  let selectedRatingImage

  useEffect(() => {
    const fetchDoctorDetails = async (doctorId: string) => {
      try {
        const response = await axios.get('http://localhost:3001/api/doctor', {
          params: { id: doctorId },
        });

        console.log('Dados do médico:', response.data);

        if (response.data.length > 0) {
          setDoctorDetails(response.data[0]);
        } else {
          setDoctorDetails(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchDoctorDetails(id);
    }
  }, [id]);

  if(doctorDetails !== null){
    selectedRatingImage = ratingImages[doctorDetails.rating] || starsFive;
  }

  return (
    <div>
      <Header/>
      <Content>
        <ContentImage>
          <Image $size src={doctor} />
        </ContentImage>
        <TextArea>
          {doctorDetails ? (
            <>
            <Text $size>{doctorDetails.name} - {doctorDetails.specialty}</Text>
            <ContentStars>

              <Image src={selectedRatingImage} alt="Stars Image" />
            </ContentStars>
            <ContentCalendar>
              <Text>Opções de agendamento:</Text>
              <Text>
                <Image src={phone} alt="Phone" /> {doctorDetails.phone}
              </Text>
              <Text>Ou via MediCare</Text>
              <Linkinho to='/'>
                <Button>Agendar</Button>
              </Linkinho>
            </ContentCalendar>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </TextArea>
      </Content>
    </div>
  );
};

export default DoctorDetails;

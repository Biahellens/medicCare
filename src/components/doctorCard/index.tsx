import React from 'react';
import icon from '../../assets/doctors.svg';
import starsFive from '../../assets/startsFive.png';
import { Content, Main, TextArea, Image } from './styles';

interface Doctor {
  id: number;
  specialty: string;
  name: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Content>
      <TextArea>
        <p>{doctor.specialty}</p>
      </TextArea>
      <Main>
        <Image $size src={icon} alt="Doctor Icon" />
      </Main>
      <TextArea>
        <p>{doctor.name}</p>
        <Image src={starsFive} alt="Stars Image" />
      </TextArea>
    </Content>
  );
};

export default DoctorCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/doctors.svg';
import starsOne from '../../assets/startsOne.png';
import starsTwo from '../../assets/startsTwo.png';
import starsThree from '../../assets/startsThree.png';
import starsFour from '../../assets/startsFour.png';
import starsFive from '../../assets/startsFive.png';
import { Content, Main, TextArea, Image } from './styles';
import { Doctor } from './doctorProps'

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const ratingImages: Record<number, string> = {
    1: starsOne,
    2: starsTwo,
    3: starsThree,
    4: starsFour,
    5: starsFive,
  };

  const selectedRatingImage = ratingImages[doctor.rating] || starsFive;

  const handleCardClick = () => {
    navigate(`/doctorDetails/${doctor.id}`);
  };

  return (
    <Content onClick={handleCardClick}>
      <TextArea>
        <p>{doctor.specialty}</p>
      </TextArea>
      <Main>
        <Image $size src={icon} alt="Doctor Icon" />
      </Main>
      <TextArea>
        <p>{doctor.name}</p>
        <Image src={selectedRatingImage} alt="Stars Image" />
      </TextArea>
    </Content>
  );
};

export default DoctorCard;

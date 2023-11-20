import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Content, ContentImage, Image, TextArea, FormContent, Input, Text, Button, BarOne, BarTwo, BarThree } from './styles';
import doctor from '../../assets/medicine.svg';

const CreatedAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [medicalPlan, setMedicalPlan] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ token: string; userId: number }>('http://localhost:3001/api/register', {
        name,
        phone,
        email,
        medicalPlan,
        age,
        gender,
      });

      // Armazenar token e ID do usuário no localStorage (ou em algum local seguro)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId.toString());

      navigate(`/`);
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div>
      <Content>
        <TextArea>
          <Text>Criar uma Conta</Text>
          <form onSubmit={handleCreateAccount}>
            <FormContent>
              <Input
                type="text"
                placeholder="Nome"
                $size
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="email"
                placeholder="E-mail"
                $size
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Plano Médico"
                value={medicalPlan}
                onChange={(e) => setMedicalPlan(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Idade"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
              <Input
                type="text"
                placeholder="Sexo"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </FormContent>
            <Button type="submit">Criar Conta</Button>
          </form>
        </TextArea>
        <ContentImage>
          <Image src={doctor} />
          <BarThree />
          <BarTwo />
          <BarOne />
        </ContentImage>
      </Content>
    </div>
  );
};

export default CreatedAccount;

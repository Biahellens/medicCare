import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Content, ContentImage, Image, TextArea, FormContent, Input, Text, Button, BarOne, BarTwo, BarThree } from './styles'
import doctor from '../../assets/medicine.svg'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [medicalPlan, setMedicalPlan] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ token: string, userId: number }>('http://localhost:3001/api/login', { email, medicalPlan });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId.toString());

      navigate(`/`);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <Content>
        <TextArea>
          <Text>LOGIN</Text>
          <form onSubmit={handleLogin}>
            <FormContent>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Plano Médico"
                value={medicalPlan}
                onChange={(e) => setMedicalPlan(e.target.value)}
              />
            </FormContent>
            <Button type="submit">Login</Button>
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

export default Login;

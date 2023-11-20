import React from "react";
import { useParams } from "react-router-dom";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home, DoctorDetails, FormDoctor, Login, CreatedAccount } from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctorDetails/:id" element={<DoctorDetailsPage />} />
        <Route path="/formDoctor/:id" element={<FormDoctorPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/createdAccount' element={<CreatedAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

const DoctorDetailsPage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" />;
  }

  return <DoctorDetails id={id} />;
};

const FormDoctorPage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" />;
  }

  return <FormDoctor id={id} />;
};

export default AppRoutes;

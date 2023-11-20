import React from 'react';

export interface Doctor {
  id: number;
  specialty: string;
  name: string;
  rating: number;
}

export interface DoctorComplete {
  id: number;
  specialty: string;
  name: string;
  rating: number;
  phone: string;
}
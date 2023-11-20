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

export interface DoctorForm {
  id: number;
  specialty: string;
  name: string;
  phone: string;
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean
}
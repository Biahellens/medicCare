import React from 'react'
import { Header, DoctorCard } from '../../components'
import { Content, ContentDoctors, TextArea } from './styles'

export default function Home(){
  return(
    <div>
      <Header />
      <Content>
        <ContentDoctors>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </ContentDoctors>
      </Content>
    </div>
  )
}
import React from 'react'

import icon from '../../assets/doctors.svg'
import starsFive from '../../assets/startsFive.png'
import { Content, Main, TextArea, Image } from './styles'

function DoctorCard() {
  return(
    <Content>
      <TextArea>
        <p>Cardiologista</p>
      </TextArea>
      <Main>
        <Image  $size src={icon}/>
      </Main>
      <TextArea>
        <p>John Smith</p>
        <Image src={starsFive}/>
      </TextArea>
    </Content>
  )
}

export default DoctorCard
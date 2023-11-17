import React from 'react'

import icon from '../../assets/icon.svg'
import { Content, Main, Detail, SearchDiv, Search, Image, Title, TextArea } from './styles'

function Header() {
  return(
    <Content>
      <Main>
        <TextArea>
          <Image  $size src={icon}/>
          <Title>MediCare</Title>
        </TextArea>
        <SearchDiv>
          <Search placeholder="Pesquisar um médico..." />
        </SearchDiv>
      </Main>
      <Detail />
    </Content>
  )
}

export default Header
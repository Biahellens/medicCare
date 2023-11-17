import React from 'react'

import icon from '../../assets/icon.svg'
import { Content, Main, Detail, SearchDiv, Search, Image } from './styles'

function Header() {
  return(
    <Content>
      <Main>
        <Image  $size src={icon}/>
        <SearchDiv>
          <Search placeholder="Pesquisar um médico..." />
        </SearchDiv>
      </Main>
      <Detail />
    </Content>
  )
}

export default Header
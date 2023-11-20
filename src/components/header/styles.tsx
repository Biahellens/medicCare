import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Main = styled.div`
  background-color: #000080;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`

export const Detail = styled.div`
  background-color: #87CEEB;
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  border-radius: 0 0 20px 20px;
`



export const Image = styled.img<{ $size?: boolean; }>`
  width: ${props => props.$size ? '60px' : '500px'};
  margin-top: ${props => props.$size ? '0' : '16%'};
`

export const Title = styled.h1`
  color: white;
`
export const TextArea = styled.div`
  display: flex;
  align-items: center;
`
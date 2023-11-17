import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 280px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  border: solid 2px;
  border-color: #87CEEB;
  border-radius: 20px;
  margin: 1rem;
`

export const Main = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 2rem;
`

export const TextArea = styled.div`
  align-text: center;
  justify-content: center;
  text-align: center;
  font-size: 22px;
`

export const Image = styled.img<{ $size?: boolean; }>`
  width: ${props => props.$size ? '210px' : '120px'};
  height: ${props => props.$size ? '160px' : '20px'};
  margin-top: ${props => props.$size ? '0' : '16%'};
`
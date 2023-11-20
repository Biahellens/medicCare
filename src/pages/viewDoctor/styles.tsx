import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-top: 40px;
`

export const TextArea = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 20px;
`
export const ContentCalendar = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
  margin-top: 60px;
`

export const ContentImage = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px
`

export const ContentStars = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

export const Image = styled.img<{ $size?: boolean; }>`
  width: ${props => props.$size ? '400px' : ''};
  height: ${props => props.$size ? '400px' : '20px'};
`

export const Text = styled.text<{ $size?: boolean}>`
  font-size: ${props => props.$size ? '32px' : '24px'};
  font-weight: ${props => props.$size ? 'bold' : 'lighter'};
  text-align: ${props => props.$size ? 'center' : 'start'};
  width: ${props => props.$size ? '80%' : '100%'};
`
export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #000080;
  color: #FFFFFF;
  font-size:12px;
  border: 2px solid #000080;
  border-radius: 4px;
  cursor: pointer
`
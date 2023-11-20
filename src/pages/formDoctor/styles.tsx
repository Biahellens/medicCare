import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-top: 60px;
`

export const ContentButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #000080;
  color: #FFFFFF;
  font-size: 16px;
  margin: 1rem;
  padding: 0.25em 1rem;
  border: 2px solid #000080;
  border-radius: 4px;
  cursor: pointer
`

export const TextArea = styled.div`
  align-text: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #4682B4
`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Input = styled.input<{ $size?: boolean; }>`
  width: ${props => props.$size ? '60%' : '30%'};
  background-color: #FFFFFF;
  height: 30px;
  border: 2px solid #000080;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
`

export const ContentCalendar = styled.div`
  margin-top: 60px;
  margin-bottom: 60px
`

export const Text = styled.text<{ $size?: boolean; }>`
  width: 100%;
  font-size: ${props => props.$size ? '28px' : '14px'};
`
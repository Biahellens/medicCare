import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const TextArea = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-item: center;
  padding: 20px
`

export const ContentImage = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: end;
`

export const Image = styled.img`
  width: 600px;
  height: 400px;
  position: absolute;
  top: 100px;
`

export const Text = styled.h1`
  color: #87CEFA;
  text-align: center;
  width: 100%;
`
export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #000080;
  color: #FFFFFF;
  font-size:12px;
  border: 2px solid #000080;
  border-radius: 20px;
  cursor: pointer
`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`

export const Input = styled.input<{ $size?: boolean; }>`
  width: ${props => props.$size ? '60%' : '35%'};;
  background-color: #FFFFFF;
  height: 30px;
  border: 2px solid #000080;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 20px;
  text-align: center;
`

export const BarOne = styled.div`
  width: 220px;
  background-color: #000080;
  height: 500px;
  border-radius: 0 0 0 160px
`

export const BarTwo = styled.div`
  width: 100px;
  background-color: #4169E1;
  height: 340px;
  border-radius: 0 0 0 120px
`

export const BarThree = styled.div`
  width: 80px;
  background-color: #87CEFA;
  height: 240px;
  border-radius: 0 0 0 120px
`
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

export const TextArea = styled.div`
  align-text: center;
  justify-content: center;
  text-align: center;
`

export const ContentDoctors = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  padding: 2rem;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #4682B4	
`

export const SearchDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Search = styled.input`
  background-color: #FFFFFF;
  width: 320px;
  height: 30px;
  display: flex;
  border: 2px solid #000080;
  border-radius: 10px;
  font-size: 14px;
`

export const Button = styled.button`
  background-color: #000080;
  color: #FFFFFF;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #000080;
  border-radius: 4px;
  cursor: pointer
`
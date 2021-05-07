import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`

export const Title = styled.h1`
  color: white;
  font-size: 60px;
  max-width: 640px;
  font-weight: 700;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.p`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`
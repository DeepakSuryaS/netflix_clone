import styled from 'styled-components';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  width: 95%;
  max-width: 1245px;
  margin: 20px auto;
  z-index: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`

export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  user-select: none;
  display: none;
`

export const Text = styled.p`
  font-size: 12px;
  color: white;
  user-select: none;
  display: none;
  line-height: normal;
`

export const Entities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  width: 95%;
  max-width: 1245px;
  margin: 0 auto;
`

export const Meta = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 10px;
  background-color: #0000008f;
  box-sizing: border-box;
`

export const Image = styled.img`
  border: 0;
  width: 100%;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.2);
      z-index: 99;
    }
    &:hover ${Meta}, &:hover ${SubTitle}, &:hover ${Text} {
      display: block;
    }
  }
`

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;
  
  @media (max-width: 800px) {
    line-height: 22px;
  }
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`

export const FeatureTitle = styled(Title)`
  margin-left: 0;
  color: #fff;
`

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;
  
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 10px 10px 0;
  font-size: 12px;
`
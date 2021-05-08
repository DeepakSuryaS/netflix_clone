import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  width: 100%;
  font-size: 48px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
`
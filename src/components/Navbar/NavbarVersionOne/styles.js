import styled from "styled-components"

export const CustomNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem ;
  position: fixed;
  width: 100%;
  z-index: 11;
  background-color: ${props => props.background};
  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.figure`
  &:hover {
    cursor: pointer;
  }
`;

export const CtoButton = styled.button`
  padding: .5rem 2rem ;
  color: white;
  background-color: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 5px;
    &:hover {
      transition: background-color ease-in .2s ;
      cursor: pointer;
      background-color: white;
      color: ${props => props.theme.colors.blue};
    }
`

export const LinksContainer = styled.div`
  //display: flex;
  //align-items: center;
  & .link {
    color: black;
    text-decoration: none;
    padding: 0.8rem;
    margin: 0 1rem;
    border-radius: 5px;
     &:hover {
       transition: background-color ease-in .2s ;
       cursor: pointer;
       background-color: ${props => props.theme.colors.yellow};
     }
  }
  & .cto {
    justify-self: end;
  }
  & .active-link {
    background-color: ${props => props.theme.colors.yellow};
  }
`;






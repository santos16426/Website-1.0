import styled from "styled-components";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: ${props => props.theme.tablet}) {
    padding: 0;
  }
  @media screen and (min-width: ${props => props.theme.tablet}) {
    width: 750px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}) {
    width: 970px;
  }
  @media screen and (min-width: ${props => props.theme.large}) {
    width: 900px;
  }
`;

export const ContainerFluid = styled(Container)`
  width: 100% !important;
  background: ${props => props.theme.white};
`;

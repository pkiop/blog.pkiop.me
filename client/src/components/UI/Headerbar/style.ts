// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
export const HeaderBar = styled.div`
  font-family: monaco;
  padding: 1.6rem 3rem;
  background-color: ${colors.mainBgColor};
  color: ${colors.mainTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    font-size: 3.2rem;
    color: ${colors.mainTextColor};

    &:hover {
      color: white;
    }
  }
`;

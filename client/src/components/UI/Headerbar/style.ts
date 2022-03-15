// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

const { header: headerColor } = colors;

export const HeaderBar = styled.div`
  font-family: monaco;
  padding: 1.6rem 3rem;
  background-color: ${headerColor.bgColor};
  color: ${headerColor.color};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    font-size: 3.2rem;
    color: ${headerColor.color};

    &:hover {
      color: ${headerColor.color_hover};
    }
  }
`;

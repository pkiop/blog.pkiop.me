// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

export const DonateBtn = styled.div`
  > a {
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.mainTextColor};
    margin-left: 1.6rem;

    &:hover {
      color: white;
    }
  }
`;

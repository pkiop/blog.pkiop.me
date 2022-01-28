// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';
import ReadTimeComponent from './ReadTime';

export const Titlebox = styled.div`
  padding: 3em 3em 0 3em;
  color: ${colors.subText};

  > h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  border-bottom: 1px solid ${colors.hr};
  margin-bottom: 2rem;
`;

export const ReadTime = styled(ReadTimeComponent)`
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;

  > div {
    font-size: 2rem;
    padding-bottom: 2rem;
    padding-right: 1rem;
  }
`;

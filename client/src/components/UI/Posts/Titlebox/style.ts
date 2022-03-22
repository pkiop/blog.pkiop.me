// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';
import ReadTimeComponent from './ReadTime';

const { post: postColor } = colors;

export const Titlebox = styled.div<{ isDarkMode: boolean }>`
  padding: 3em;
  color: ${({ isDarkMode }) =>
    isDarkMode ? postColor.dark.color : postColor.color};
  line-height: 5rem;
  word-break: keep-all;

  > h1 {
    font-size: 4rem;
    margin-bottom: 0.4rem;
  }

  border-bottom: 1px solid ${colors.hr};
  margin-bottom: 2rem;
`;

export const ReadTime = styled(ReadTimeComponent)``;

export const Wrapper = styled.div`
  display: flex;
  line-height: 2rem;
  margin-top: 1.8rem;

  > div {
    font-size: 2rem;
    padding-right: 1rem;
  }
`;

// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

const { post: postColor } = colors;
export const ReadTime = styled.div<{ isDarkMode: boolean }>`
  color: ${({ isDarkMode }) =>
    isDarkMode ? postColor.dark.color : postColor.color};
  font-size: 2rem;
`;

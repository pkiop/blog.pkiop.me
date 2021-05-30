// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
import TagComponent from './Tag';

export const TagList = styled.div`
  display: flex;

  color: ${colors.subText};
`;

export const Tag = styled(TagComponent)``;

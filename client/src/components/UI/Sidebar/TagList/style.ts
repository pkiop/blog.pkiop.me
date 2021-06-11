// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
import TagComponent from './Tag';

export const TagList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  color: ${colors.subText};
`;

export const Tag = styled(TagComponent)``;
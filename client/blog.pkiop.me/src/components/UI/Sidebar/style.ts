// styles
import styled from 'styled-components';
import CategoryComponent from './Category';
import TagListComponent from './TagList';

export const Sidebar = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

export const Category = styled(CategoryComponent)``;

export const TagList = styled(TagListComponent)``;

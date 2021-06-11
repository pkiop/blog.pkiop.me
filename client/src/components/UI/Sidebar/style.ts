// styles
import styled from 'styled-components';
import CategoryComponent from './Category';
import TagListComponent from './TagList';
import DonateLinkComponent from './DonateLink';
import { colors } from 'styles/theme';

export const Sidebar = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  width: 20rem;

  & > .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Category = styled(CategoryComponent)``;

export const TagList = styled(TagListComponent)`
  margin-bottom: 1rem;
`;

export const FilterClearBtn = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background-color: ${colors.mainBgColor};
  color: ${colors.mainTextColor};
  border-radius: 1rem;

  width: 80%;
  margin-bottom: 2rem;
`;

export const DonateLink = styled(DonateLinkComponent)`
  width: 100%;
`;
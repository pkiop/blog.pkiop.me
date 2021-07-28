// styles
import styled from 'styled-components';
import CategoryComponent from './Category';
import TagListComponent from './TagList';
import DonateLinkComponent from './DonateLink';
import AboutMeComponent from './AboutMe';
import { colors, layout, transition } from 'styles/theme';
import { ISidebarOpen } from 'types/headerbar';

const bdr = layout.sidebarBorderRadius;
export const Sidebar = styled.div<ISidebarOpen>`
  @media (max-width: ${layout.mobileWidth}) {
    display: flex;
    position: absolute;
    right: ${({ isOpen }) => (isOpen ? 0 : -40)}rem;
    transition: 0.3s right;
    background-color: ${colors.mobileSidebarBgColor};
    border-radius: 0 0 ${bdr} ${bdr};
    padding: 3rem 3rem 1rem 3rem;
    width: ${layout.sidebarWidth};
  }
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

export const CategoryWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Category = styled(CategoryComponent)``;

export const TagList = styled(TagListComponent)``;

export const FilterClearBtn = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background-color: ${colors.mainBgColor};
  color: ${colors.mainTextColor};
  border-radius: 1rem;

  width: 80%;
  margin-bottom: 2rem;

  cursor: pointer;
  :hover {
    cursor: pointer;
    filter: brightness(120%);
    transition: ${transition.hoverTransitionTime} filter;
  }
  transition: ${transition.hoverTransitionTime} filter;
`;

export const DonateLink = styled(DonateLinkComponent)`
  width: 100%;
`;

export const AboutMe = styled(AboutMeComponent)``;

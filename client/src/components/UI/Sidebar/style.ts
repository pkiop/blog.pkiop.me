// styles
import styled from 'styled-components';
import CategoryComponent from './Category';
import TagListComponent from './TagList';
import DonateLinkComponent from './DonateLink';
import AboutMeComponent from './AboutMe';
import { colors, layout, transition } from 'styles/theme';
import { SidebarStyle } from 'types/headerbar';

const { contents: contentsColor } = colors;
const { sidebar: sidebarColor } = colors;

const bdr = layout.sidebarBorderRadius;

export const Sidebar = styled.div<SidebarStyle>`
  @media (max-width: ${layout.mobileWidth}) {
    display: flex;
    position: absolute;
    top: 11.6rem;
    z-index: 10;
    right: ${({ isOpen }) => (isOpen ? 0 : -40)}rem;
    transition: 0.3s right;
    background-color: ${contentsColor.bgColor};
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
  background-color: ${contentsColor.bgColor};
  color: ${contentsColor.color};
  border-radius: 1rem;
  border: 1px solid ${sidebarColor.category.border};

  width: 80%;
  margin-bottom: 2rem;

  cursor: pointer;
  :hover {
    background-color: ${contentsColor.bgColor_hover};
  }
`;

export const DonateLink = styled(DonateLinkComponent)`
  width: 100%;
`;

export const AboutMe = styled(AboutMeComponent)``;

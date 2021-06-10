import { ITag } from 'components/UI/Sidebar/TagList/Tag';
import { colors } from 'styles/theme';
export const testTagList: ITag[] = [
  { title: 'React', color: '#7ED1EF', textColor: colors.darkText },
  { title: 'AWS', color: '#D6702D', textColor: colors.darkText },
  { title: 'CSS', color: '#2E4AD5', textColor: colors.subText },
  { title: 'Google Analytics', color: '#EEAF42', textColor: colors.darkText },
];
export const testTag = testTagList[0];

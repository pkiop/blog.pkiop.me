import { ITag } from 'components/UI/Sidebar/TagList/Tag';
import { colors } from 'styles/theme';
export const testTagList: ITag[] = [
  { title: 'React', color: '#7ED1EF', textColor: colors.darkText },
  { title: 'AWS', color: '#D6702D', textColor: colors.darkText },
  { title: 'CSS', color: '#2E4AD5', textColor: colors.subText },
  { title: 'Google Analytics', color: '#EEAF42', textColor: colors.darkText },
  { title: '마케팅', color: '#5283EA', textColor: colors.darkText },
  { title: '세바시', color: '#387725', textColor: colors.darkText },
  { title: '뇌과학', color: '#FCD8D4', textColor: colors.darkText },
  { title: 'Backend', color: '#1560BD', textColor: colors.subText },
  { title: 'Express', color: '#2F61EB', textColor: colors.subText },
  { title: 'Auth', color: '#31BFEB', textColor: colors.darkText },
];
export const testTag = testTagList[0];

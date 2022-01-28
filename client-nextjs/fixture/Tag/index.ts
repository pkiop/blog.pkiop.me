import { ITag } from 'types/tag.interface';
import { colors } from '@styles/theme';

export const testTagList: ITag[] = [
  { title: 'React', color: '#7ED1EF', fontColor: colors.darkText },
  { title: 'AWS', color: '#D6702D', fontColor: colors.darkText },
  { title: 'CSS', color: '#2E4AD5', fontColor: colors.subText },
  { title: 'Google Analytics', color: '#EEAF42', fontColor: colors.darkText },
  { title: '마케팅', color: '#5283EA', fontColor: colors.darkText },
  { title: '세바시', color: '#387725', fontColor: colors.darkText },
  { title: '뇌과학', color: '#FCD8D4', fontColor: colors.darkText },
  { title: 'Backend', color: '#1560BD', fontColor: colors.subText },
];
export const testTag = testTagList[0];

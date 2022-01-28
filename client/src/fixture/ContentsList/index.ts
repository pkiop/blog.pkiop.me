import { IContent } from 'components/UI/ContentsList';
const testObj = {
  mainCategory: 'main',
  subCategory: 'sub',
  tag: [{ title: 'tag1', color: 'black', textColor: 'white' }],
};
export const testContentList: IContent[] = [
  {
    title: '글 1',
    date: '첫번째 글에대한 내용입니다.',
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 2',
    date: '두번째 글에대한 내용입니다.',
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 3',
    date: '세번째 글에대한 내용입니다.',
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 4',
    date: '네번째 글에대한 내용입니다.',
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 5',
    date: '다섯번째 글에대한 내용입니다.',
    slug: '/1',
    ...testObj,
  },
];

export const testContent: any = {
  title: '제목입니다.',
  date: '2020-20-20',
};

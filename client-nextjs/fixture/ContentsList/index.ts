import { IContent } from 'types/content.interface';

const testObj = {
  mainCategory: { title: 'main', count: 0 },
  subCategory: { title: 'sub', count: 2 },
  tags: [{ title: 'tag1', color: 'black', fontColor: 'white' }],
};
export const testContentList: IContent[] = [
  {
    title: '글 1',
    updateAt: new Date('2020-10-20'),
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 2',
    updateAt: new Date('2020-10-20'),
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 3',
    updateAt: new Date('2020-10-20'),
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 4',
    updateAt: new Date('2020-10-20'),
    slug: '/1',
    ...testObj,
  },
  {
    title: '글 5',
    updateAt: new Date('2020-10-20'),
    slug: '/1',
    ...testObj,
  },
];

export const testContent: any = {
  title: '제목입니다.',
  date: '2020-10-20',
};

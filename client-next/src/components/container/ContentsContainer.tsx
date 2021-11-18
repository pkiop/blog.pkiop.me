import ContentsList from '@components/UI/ContentsList';
import { ITag } from '@components/UI/Sidebar/TagList/Tag';
import { testTagList } from '@fixture/Tag';

const ContentsContainer = () => {
  const contentsList = [].map((edge: any) => ({
    ...edge.node.frontmatter,
    tag: edge.node.frontmatter.tag.map((tag: string) => ({
      ...(testTagList.find((testTag: ITag) => testTag.title === tag) || {
        color: 'gray',
        textColor: '#010101',
      }),
      title: tag,
    })),
  }));

  return <ContentsList contentsList={contentsList} />;
};

export default ContentsContainer;

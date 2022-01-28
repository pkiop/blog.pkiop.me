import { testTagList } from '@fixture/Tag';
import TagList from './index';

export default {
  title: 'ContentList / Content / TagList',
  component: TagList,
};

export const MainTagList = () => <TagList tagList={testTagList} />;

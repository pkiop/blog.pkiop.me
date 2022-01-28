import { testTag } from '@fixture/Tag';
import Tag from './index';

export default {
  title: 'ContentList / Content / TagList / Tag',
  component: Tag,
};

export const MainTagList = () => (
  <Tag
    onClick={() => {
      alert('tagclick');
    }}
    tag={testTag}
  />
);

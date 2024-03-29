import React from 'react';
import Tag from './index';
import { testTag } from 'fixture/Tag';

export default {
  title: 'ContentList / Content / TagList / Tag',
  component: Tag,
};

export const MainTagList = () => {
  return (
    <Tag
      onClick={() => {
        alert('tagclick');
      }}
      tag={testTag}
    />
  );
};

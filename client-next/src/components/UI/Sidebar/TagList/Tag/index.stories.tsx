import React from 'react';
import Tag from './index';
import { testTag } from 'fixture/Tag';

export default {
  title: 'Sidebar / TagList / Tag',
  component: Tag,
};

export const MainTagList = () => {
  return (
    <Tag
      isSelected={false}
      onClick={() => {
        alert('tagclick');
      }}
      tag={testTag}
    />
  );
};

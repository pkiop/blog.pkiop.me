import React from 'react';
import Logo from './index';

export default {
  title: 'Sidebar / AboutMe / Logo',
  component: Logo,
};

import YoutubeLogo from 'images/youtubelogo.png';

export const Main = () => {
  return (
    <Logo
      imgFile={YoutubeLogo}
      objectFit
      alt="youtube"
      link="javascript:void(0)"
    />
  );
};

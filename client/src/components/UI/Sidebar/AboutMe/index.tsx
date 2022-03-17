import React from 'react';
import * as S from './style';

import GithubLogo from 'images/githublogo.png';
import LinkedinLogo from 'images/linkedinlogo.png';
import YoutubeLogo from 'images/youtubelogo.png';

export interface IAboutMeComponent {
  className?: string;
}

function TagList({ className }: IAboutMeComponent) {
  return (
    <S.AboutMe className={className}>
      <S.Logo
        imgFile={GithubLogo}
        link="https://github.com/pkiop"
        alt="github link"
        bgColor="black"
        borderRadius={999}
      />
      <S.Logo
        imgFile={YoutubeLogo}
        link="https://www.youtube.com/channel/UCr3lkp7TJiJTCY4ffRQ1m2A"
        objectFit
        alt="youtube link"
      />
      <S.Logo
        imgFile={LinkedinLogo}
        link="https://www.linkedin.com/in/%EC%83%81%EC%8B%A0-%EB%B0%95-b1a9a3158/"
        alt="linkedin link"
      />
    </S.AboutMe>
  );
}

export default TagList;

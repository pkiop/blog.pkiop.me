import React from 'react';
import * as S from './style';
import donateImage from 'images/donate.png';
import { navigate } from 'gatsby';

export interface IDonateLinkComponent {
  className?: string;
}

function DonateLink({ className }: IDonateLinkComponent) {
  const onClickHandler = () => {
    navigate('/donate');
  };
  return (
    <S.DonateLink className={className}>
      <img src={donateImage} onClick={onClickHandler} />
    </S.DonateLink>
  );
}

export default DonateLink;

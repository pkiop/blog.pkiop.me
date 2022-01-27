import donateImage from '@images/donate.png';
import * as S from './style';

export interface IDonateLinkComponent {
  className?: string;
}

const DonateLink = ({ className }: IDonateLinkComponent) => {
  const onClickHandler = () => {
    window.location.href = '/donate';
  };
  return (
    <S.DonateLink className={className} onClick={onClickHandler}>
      <img src={donateImage} alt="test" />
    </S.DonateLink>
  );
};

export default DonateLink;

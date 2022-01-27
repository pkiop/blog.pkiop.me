import { getYMD } from '@utils/date';
import * as S from './style';

interface TitleBox {
  title: string;
  date: Date;
  readTime: number;
}

interface TitleBoxComponent extends TitleBox {
  className?: any;
}

const TitleBoxApp = ({
  title,
  date,
  readTime,
  className,
}: TitleBoxComponent) => (
  <S.Titlebox className={className}>
    <h1>{title}</h1>
    <S.Wrapper>
      <div>Posted {getYMD(date)}</div>
      <S.ReadTime readTime={readTime} />
    </S.Wrapper>
  </S.Titlebox>
);

export default TitleBoxApp;

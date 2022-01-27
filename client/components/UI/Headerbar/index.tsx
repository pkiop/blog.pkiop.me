import type { IHeaderbar } from 'types/headerbar';
import Nav from './Nav';
import * as S from './style';

const Headerbar = ({ nav }: IHeaderbar) => (
  <S.HeaderBar>
    <a href="/">PKIOP BLOG</a>
    <Nav NavButtonList={nav.NavButtonList} />
  </S.HeaderBar>
);

export default Headerbar;

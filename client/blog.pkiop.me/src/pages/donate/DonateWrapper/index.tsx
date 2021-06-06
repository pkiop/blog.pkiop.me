import * as React from 'react';
import TossDonateContainer from 'components/container/DonateContainer/TossDonateContainer';
import styled from 'styled-components';
import CoupangPartnersDonateContainer from 'components/container/DonateContainer/CoupangPartnersDonateContainer';
// styles

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

// markup
const IndexPage = () => {
  return (
    <ContentsWrapper>
      <TossDonateContainer />
      <CoupangPartnersDonateContainer />
    </ContentsWrapper>
  );
};

export default IndexPage;

import * as React from 'react';
import TossDonateContainer from 'components/container/DonateContainer/TossDonateContainer';
import CoupangPartnersDonateContainer from 'components/container/DonateContainer/CoupangPartnersDonateContainer';
import ExplainDonate from 'components/UI/Donate/ExplainDonate';
import styled from 'styled-components';
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
      <ExplainDonate />
      <CoupangPartnersDonateContainer />
      <TossDonateContainer />
    </ContentsWrapper>
  );
};

export default IndexPage;

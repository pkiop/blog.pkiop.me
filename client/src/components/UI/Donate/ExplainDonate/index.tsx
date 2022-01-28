import React from 'react';

import * as S from './style';

function ExplainDonate() {
  return (
    <S.ExplainDonate>
      <h1>후원 하기</h1>
      <div>
        아래 쿠팡 버튼을 누른다음 쿠팡에서 구매를 하시면 구매상품의 3%만큼
        저에게 수익이 들어옵니다.
      </div>
      <div>
        후원을 원하는 금액을 입력 후 Toss 버튼을 누르면 해당 금액만큼 Toss로
        후원할 수 있습니다.
      </div>
    </S.ExplainDonate>
  );
}

export default ExplainDonate;

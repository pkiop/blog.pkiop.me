import React, { useState, useEffect } from 'react';
import TossDonate from 'components/UI/Donate/TossDonate';
import axios from 'axios';

const tossDonateBtnApiLink = 'https://toss.im/transfer-web/linkgen-api/link';
const config = {
  apiKey: '86c01507af7b4393ad63ebfff1fe7ed4',
  bankName: '하나',
  bankAccountNo: '81087458745805',
  amount: 1000,
  message: '토스로 기부하기',
};

function TossDonateContainer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [payload, setPayload] = useState<any>(null);

  const [amount, setAmount] = useState<number>(1000);
  const getDonateBtnInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.post(tossDonateBtnApiLink, { ...config, amount });
      setPayload(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDonateBtnInfo();
  }, [amount]);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  if (!payload) {
    return <div>no data</div>;
  }
  // {"resultType":"SUCCESS","success":{"scheme":"supertoss://send?bank=하나&accountNo=81087458745805&origin=linkgen&amount=1000&msg=%ED%86%A0%EC%8A%A4%EB%A1%9C+%EA%B8%B0%EB%B6%80%ED%95%98%EA%B8%B0","link":"https://toss.im/_m/bUQc5J4b"}}
  return (
    <div>
      <TossDonate
        amount={amount}
        setAmount={setAmount}
        link={payload.success.scheme}
      />
    </div>
  );
}

export default TossDonateContainer;

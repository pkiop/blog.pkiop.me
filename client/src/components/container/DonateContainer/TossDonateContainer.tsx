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

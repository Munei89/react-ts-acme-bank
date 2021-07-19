import React, { useEffect, useState } from "react";
import { actions } from "./slice";
import { Spin, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import selectState from "./selectors";
import AccountsList from "components/AccountsList";
import { IAccounts } from "./types";

const Home: React.FC = () => {
  const [currentAccounts, setCurrentAccounts] = useState<IAccounts[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const { userAccounts, loading, error } = selectState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAccounts());

    if (userAccounts.length) {
      setCurrentAccounts(userAccounts);
      const totalBalance = currentAccounts.reduce(
        (a, b) => a + parseFloat(b.balance),
        0
      );
      setBalance(totalBalance);
    }
  }, [dispatch, userAccounts.length, currentAccounts]);

  const requestWithdrawal = (accountNumber: string | number) => {
    dispatch(actions.withdrawRequest({ accountNumber: accountNumber }));
  };

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <p>There was an error loading the account</p>;
  }

  return (
    <>
      <Row>
        <Col span={16}>
          <h2>Account Details</h2>
        </Col>
        <Col span={8}>
          <h2>Total Balance: {balance}</h2>
        </Col>
      </Row>
      <AccountsList accounts={userAccounts} withdrawFunds={requestWithdrawal} />
    </>
  );
};

export default Home;

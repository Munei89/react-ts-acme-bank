import React, { useEffect, useState } from "react";
import { actions } from "./slice";
import { Spin, Row, Col, message } from "antd";
import { useDispatch } from "react-redux";
import selectState from "./selectors";
import AccountsList from "components/AccountsList";
import { EAccountType } from "./types";

const Home: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const { userAccounts, loading, error } = selectState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAccounts());
  }, [dispatch]);

  useEffect(() => {
    if (userAccounts.length) {
      const totalBalance = userAccounts.reduce(
        (a, b) => a + parseFloat(b.balance),
        0
      );
      setBalance(totalBalance);
    }
  }, [userAccounts]);

  const warning = (err: string) => {
    message.warning(err);
  };

  const requestWithdrawal = (
    accountNumber: string | number,
    overDraftLeft: number,
    accountType: string
  ) => {
    const isSavings = accountType === EAccountType.SAVINGS;
    // Get current balance
    const currentBalance = userAccounts.find(
      (item) => item.account_number === accountNumber
    )!.balance;
    let newBalance = Number(currentBalance) - 100;
    const isValidWithdrawal = newBalance > -500 && Number(currentBalance) > 0;

    // To prevent negative balance on Savings
    if (newBalance < 0 && isSavings) {
      return warning("You can only with draw the avalable amount from savings");
    }

    //Implementation using redux and dispatching a withdrawal action in a live instance this would do a api call to initiate a withrawal.
    if (isValidWithdrawal && overDraftLeft > -500) {
      dispatch(
        actions.withdrawRequest({
          accountNumber: accountNumber,
          amount: newBalance,
        })
      );
    } else {
      const err = `You can only Withdraw ${overDraftLeft.toFixed(2)}`;
      warning(err);
    }
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

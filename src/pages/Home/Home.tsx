import React, { useEffect, useState } from "react";
import { actions } from "./slice";
import { Spin, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import selectState from "./selectors";
import AccountsList from "components/AccountsList";
import { IAccounts } from "./types";

const Home: React.FC = () => {
  const [currentAccounts, setCurrentAccounts] = useState<IAccounts[]>([]);
  const { userAccounts, loading, error } = selectState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAccounts());

    if (userAccounts.length) {
      setCurrentAccounts(userAccounts);
    }
  }, [dispatch, userAccounts.length]);

  const requestWithdrawal = (accountNumber: string | number) => {
    console.log(accountNumber);
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
        <Col>
          <h2>Account Details</h2>
        </Col>
      </Row>
      <AccountsList
        accounts={currentAccounts}
        withdrawFunds={requestWithdrawal}
      />
    </>
  );
};

export default Home;

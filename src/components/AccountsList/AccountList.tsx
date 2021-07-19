import { IAccounts } from "pages/Home/types";
import React from "react";
import { Button } from "antd";
import { StyledList, StyledListItem, StyledCol } from "./styles";

interface IAccountListProps {
  accounts: IAccounts[];
  withdrawFunds: (accountNumber: string | number) => void;
}

const AccountList: React.FC<IAccountListProps> = ({
  accounts,
  withdrawFunds,
}) => {
  return (
    <StyledList itemLayout="horizontal">
      {accounts.length > 0 ? (
        <>
          {accounts.map((data, i) => {
            const { account_type, account_number, balance } = data;
            const isInArrears: boolean = Number(balance) < 0;
            return (
              <StyledListItem key={i} isInArrears={isInArrears}>
                <StyledCol span={6}>
                  <h4>Account Type</h4>
                  {account_type}
                </StyledCol>
                <StyledCol span={6}>
                  <h4>Account Number</h4>
                  {account_number}
                </StyledCol>
                <StyledCol span={6}>
                  <h4>Account Balance</h4>
                  {balance}
                </StyledCol>
                <StyledCol span={6}>
                  <Button
                    type="default"
                    onClick={() => withdrawFunds(account_number)}
                  >
                    Withdraw
                  </Button>
                </StyledCol>
              </StyledListItem>
            );
          })}
        </>
      ) : (
        <p>No Data</p>
      )}
    </StyledList>
  );
};

export default AccountList;

import { EAccountType, IAccounts } from "pages/Home/types";
import React from "react";
import { Button } from "antd";
import { StyledList, StyledListItem, StyledCol } from "./styles";

interface IAccountListProps {
  accounts: IAccounts[];
  withdrawFunds: (
    accountNumber: string | number,
    overDraftLeft: number,
    accountType: string
  ) => void;
}

const AccountList: React.FC<IAccountListProps> = ({
  accounts,
  withdrawFunds,
}) => {
  return (
    <>
      <StyledList itemLayout="horizontal">
        {accounts.length > 0 ? (
          <>
            {accounts.map((data, i) => {
              const { account_type, account_number, balance } = data;
              const currentBalance = Number(balance);
              const isInArrears: boolean =
                currentBalance < -500 ||
                (currentBalance < 0 && account_type === EAccountType.SAVINGS);
              const overDraftLeft: number =
                currentBalance < 0
                  ? currentBalance + 500
                  : 500 + currentBalance;
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
                    {currentBalance.toFixed(2)}
                    {!isInArrears && account_type !== EAccountType.SAVINGS && (
                      <div style={{ color: "green" }}>
                        Max withdrawal: <div>{overDraftLeft.toFixed(2)}</div>
                      </div>
                    )}
                  </StyledCol>
                  <StyledCol span={6}>
                    <Button
                      type="default"
                      onClick={() =>
                        withdrawFunds(
                          account_number,
                          overDraftLeft,
                          account_type
                        )
                      }
                      disabled={isInArrears}
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
    </>
  );
};

export default AccountList;

/* --- STATE --- */
export interface AccountState {
  userAccounts: IAccounts[];
  loading: boolean;
  error: boolean;
  withdrawal: boolean;
}

export interface IAccounts {
  account_number: string | number;
  account_type: string;
  balance: string;
}

export enum EAccountType {
  CHEQUE = "cheque",
  SAVINGS = "savings",
}

export type ContainerState = AccountState;

/* --- STATE --- */
export interface AccountState {
  userAccounts: IAccounts[];
  loading: boolean;
  error: boolean;
}

export interface IAccounts {
  account_number: string | number;
  account_type: string;
  balance: string | number;
}

export enum EAccountType {
  CHEQUE = "cheque",
  SAVINGS = "savings",
}

export type ContainerState = AccountState;

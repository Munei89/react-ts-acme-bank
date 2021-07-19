import { AccountState } from "pages/Home/types";

export interface RootState {
  home: AccountState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

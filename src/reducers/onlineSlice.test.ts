import onlineReducer, { onlineStatusChange, OnlineState } from "./onlineSlice";

describe("online slice", () => {
  it("returns the initial state when starting", () => {
    const result: OnlineState = onlineReducer(undefined, {} as any);
    expect(result.online).toEqual(false);
  });

  it("changes the online state when the status changes", () => {
    const state: OnlineState = { online: false };
    const result: OnlineState = onlineReducer(state, onlineStatusChange(true));
    expect(result.online).toEqual(true);
  });
});

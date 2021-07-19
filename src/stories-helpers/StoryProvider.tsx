import React from "react";
import Redux from "redux";
import { Provider } from "react-redux";
import { StoryFn } from "@storybook/addons";

const StoryProvider: React.FC<{
  story: StoryFn;
  store: Redux.Store<any, Redux.AnyAction>;
}> = ({ story, store }) => <Provider store={store}>{story() as any}</Provider>;

export default StoryProvider;

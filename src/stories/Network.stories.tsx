import React from "react";
import { StoryFn } from "@storybook/addons";
import configureStore from "redux-mock-store";

import StoryProvider from "stories-helpers/StoryProvider";

import Network from "components/Network";

const mockStore = configureStore();

function makeStore(status: boolean) {
  return mockStore({
    network: {
      online: status,
    },
  });
}

const online = makeStore(true);
const offline = makeStore(false);

export default {
  title: "Network Status",
  component: Network,
};

export const networkIsOnline = () => <Network />;
networkIsOnline.story = {
  decorators: [
    (storyFn: StoryFn) => <StoryProvider store={online} story={storyFn} />,
  ],
};

export const networkIsOffline = () => <Network />;
networkIsOffline.story = {
  decorators: [
    (storyFn: StoryFn) => <StoryProvider store={offline} story={storyFn} />,
  ],
};

import { EventChannel } from "redux-saga";
import { ChannelTakeEffectDescriptor } from "redux-saga/effects";

function channelFeed<T>(feed: T[] = []) {
  let index = 0;

  return {
    take(
      effect: ChannelTakeEffectDescriptor<T>,
      next: () => Record<string, any>
    ) {
      if (index < feed.length) {
        const i = index;
        ++index;
        return feed[i];
      } else {
        (effect.channel as EventChannel<T>).close();
        return next();
      }
    },
  };
}

export default channelFeed;

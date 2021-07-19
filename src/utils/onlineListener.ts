export type OnlineListener = (status: boolean) => void;

function registerOnlineListener(onlineChange: OnlineListener): () => void {
  const online = () => onlineChange(true);
  const offline = () => onlineChange(false);

  window.addEventListener("online", online);
  window.addEventListener("offline", offline);

  return () => {
    window.removeEventListener("online", online);
    window.removeEventListener("offline", offline);
  };
}

export default registerOnlineListener;

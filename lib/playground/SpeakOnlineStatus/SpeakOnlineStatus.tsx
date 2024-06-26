import useSpeakOnlineStatus from "@voguex/hooks/useSpeakOnlineStatus";

export const SpeakOnlineStatus = () => {
  const { onlineStatus } = useSpeakOnlineStatus();

  return (
    <section>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is used to recognise by voice whether we are connected or not.
      </p>
      <p
        aria-label="online status"
        aria-describedby="description of online status"
        style={{ textAlign: "center" }}
      >
        {onlineStatus ? "You are online" : "You are offline"}
      </p>
    </section>
  );
};

import useReducedMotionStatus from "@voguex/hooks/useReducedMotionStatus";

export const ReducedMotionStatus = () => {
  const reduceMotionEnabled = useReducedMotionStatus();

  return (
    <section>
      <p
        aria-label="title of component"
        aria-describedby="title to say the functionality of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is to detect if the user have the preference of reduced
        movement in their device enabled or not:
      </p>
      {reduceMotionEnabled ? (
        <p
          aria-label="reduced motion enabled"
          aria-describedby="description if we have the preference of reduced movement enabled"
          style={{ textAlign: "center" }}
        >
          The user have the preference of reduced movement enabled.
        </p>
      ) : (
        <p
          aria-label="reduced motion disabled"
          aria-describedby="description if we have the preference of reduced movement disabled"
          style={{ textAlign: "center" }}
        >
          The user have the preference of reduced movement disabled.
        </p>
      )}
    </section>
  );
};

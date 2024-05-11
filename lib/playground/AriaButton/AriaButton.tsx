import useAriaButton from "@voguex/hooks/useAriaButton";

export const AriaButton = () => {
  const ariaAttributes = useAriaButton({
    ariaLabel: "Example Button",
    ariaPressed: false,
    ariaDisabled: false,
  });

  const handleClick = () => {};

  return (
    <section>
      <p
        aria-label="title of the component"
        aria-describedby="title say that we have a button bellow with aria attributes"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        Button with aria attributes using useAriaButton:
      </p>
      <button
        {...ariaAttributes}
        onClick={handleClick}
        data-testid="button-aria"
      >
        Click Me
      </button>
    </section>
  );
};

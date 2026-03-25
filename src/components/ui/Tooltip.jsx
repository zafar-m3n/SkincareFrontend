import React from "react";
import Tippy from "@tippyjs/react";

const Tooltip = ({
  content,
  children,
  placement = "top",
  delay = [200, 0],
  interactive = false,
  disabled = false,
  maxWidth = 250,
  className = "",
  theme = "light",
  animation = "scale",
}) => {
  if (!content || disabled) {
    return <>{children}</>;
  }

  return (
    <Tippy
      content={content}
      placement={placement}
      delay={delay}
      interactive={interactive}
      maxWidth={maxWidth}
      animation={animation}
      theme={theme}
    >
      <span className={`inline-flex font-dm-sans ${className}`}>{children}</span>
    </Tippy>
  );
};

export default Tooltip;

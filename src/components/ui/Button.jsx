import React from "react";
import Spinner from "@/components/ui/Spinner";
import Tooltip from "@/components/ui/Tooltip";
import Icon from "@/components/ui/Icon";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  variant = "accent",
  size = "base", // base | sm (for text / text+icon)
  className = "",
  text = "",
  iconName = null, // optional icon
  tooltipContent = null,
}) => {
  const hasText = Boolean(text);
  const hasIcon = Boolean(iconName);
  const isIconOnly = hasIcon && !hasText;

  const baseStyles = "rounded transition flex justify-center items-center gap-2";

  const sizeStyles = {
    base: "w-full px-4 py-2 text-sm",
    sm: "px-2.5 py-1.5 text-xs",
  };

  const variants = {
    accent: "bg-accent text-white font-semibold hover:bg-accent/90",
    secondary: "bg-secondary text-white font-semibold hover:bg-secondary/90",
    gray: "bg-gray-200 text-gray-800 font-medium hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 font-medium hover:bg-gray-100",
    danger: "bg-red-500 text-white font-semibold hover:bg-red-600",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const spinnerSize = isIconOnly ? "sm" : size === "sm" ? "sm" : "md";

  let content = null;

  if (loading) {
    content = <Spinner size={spinnerSize} />;
  } else {
    let iconNode = null;

    if (hasIcon) {
      iconNode = isIconOnly ? (
        <Icon icon={iconName} width={36} className="p-2 rounded" />
      ) : (
        <Icon icon={iconName} width={18} />
      );
    }

    if (isIconOnly) {
      content = iconNode;
    } else if (hasIcon && hasText) {
      content = (
        <>
          {iconNode}
          <span>{text}</span>
        </>
      );
    } else {
      content = text;
    }
  }

  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${!isIconOnly ? sizeStyles[size] : ""}
        ${variants[variant]}
        ${disabled || loading ? disabledStyles : ""}
        ${className}
      `}
    >
      {content}
    </button>
  );

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{buttonElement}</Tooltip>;
  }

  return buttonElement;
};

export default Button;

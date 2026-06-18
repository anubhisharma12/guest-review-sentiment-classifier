/**
 * Button props:
 * - children: button label or nested content.
 * - variant: "primary", "secondary", or "ghost".
 * - size: "sm", "md", or "lg".
 * - isLoading: shows a loading spinner and disables interaction.
 * - className: optional extra class names.
 * - ...props: standard button attributes such as type, disabled, and onClick.
 */
import Loader from "./Loader";

function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) {
  return (
    <button
      className={`ui-button ui-button--${variant} ui-button--${size} ${className}`.trim()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="ui-button__loading">
          <Loader size="sm" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;

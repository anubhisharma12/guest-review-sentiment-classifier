/**
 * Toast props:
 * - message: notification text.
 * - type: "success", "info", or "error".
 * - onClose: optional dismiss handler.
 * - className: optional extra class names.
 */
function Toast({ message, type = "info", onClose, className = "" }) {
  return (
    <div className={`ui-toast ui-toast--${type} ${className}`.trim()} role="status">
      <span className="ui-toast__dot" aria-hidden="true"></span>
      <span>{message}</span>
      {onClose && (
        <button className="ui-toast__close" type="button" aria-label="Dismiss notification" onClick={onClose}>
          x
        </button>
      )}
    </div>
  );
}

export default Toast;

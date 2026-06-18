/**
 * Loader props:
 * - label: accessible loading text for screen readers.
 * - size: "sm", "md", or "lg".
 * - className: optional extra class names.
 */
function Loader({ label = "Loading", size = "md", className = "" }) {
  return (
    <span className={`ui-loader ui-loader--${size} ${className}`.trim()} role="status">
      <span className="ui-loader__ring" aria-hidden="true"></span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default Loader;

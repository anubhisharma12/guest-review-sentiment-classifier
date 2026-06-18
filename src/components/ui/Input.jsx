/**
 * Input props:
 * - label: visible input label.
 * - multiline: renders a textarea instead of a single-line input.
 * - error: validation message shown below the field.
 * - helperText: optional supporting text shown when no error exists.
 * - className: optional wrapper class names.
 * - ...props: standard input/textarea attributes such as id, name, value, and onChange.
 */
function Input({ label, multiline = false, error, helperText, className = "", id, ...props }) {
  const inputId = id || props.name;
  const helpId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const Field = multiline ? "textarea" : "input";

  return (
    <div className={`ui-field ${className}`.trim()}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <Field
        id={inputId}
        className={error ? "ui-input ui-input--error" : "ui-input"}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId || helpId}
        {...props}
      />
      {error ? (
        <span id={errorId} className="ui-field__error">
          {error}
        </span>
      ) : helperText ? (
        <span id={helpId} className="ui-field__helper">
          {helperText}
        </span>
      ) : null}
    </div>
  );
}

export default Input;

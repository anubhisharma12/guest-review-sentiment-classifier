/**
 * Modal props:
 * - isOpen: controls whether the dialog is rendered.
 * - title: dialog heading text.
 * - children: dialog content.
 * - onClose: called when the close button or backdrop is clicked.
 * - footer: optional action area displayed below the content.
 */
function Modal({ isOpen, title, children, onClose, footer }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="ui-modal" role="presentation" onMouseDown={onClose}>
      <div
        className="ui-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ui-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="ui-modal__header">
          <h2 id="ui-modal-title">{title}</h2>
          <button className="ui-icon-button" type="button" aria-label="Close modal" onClick={onClose}>
            x
          </button>
        </div>
        <div className="ui-modal__content">{children}</div>
        {footer && <div className="ui-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;

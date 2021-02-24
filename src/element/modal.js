import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const Modal = forwardRef((props, ref) => {
  const [value, setValue] = useState(false);

  const showToast = () => {
    setValue(true);
  };

  const hideToast = () => {
    setValue(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showToast: showToast,
    };
  });

  useEffect(() => {
    setValue(props.isShow);
  }, [props.isShow]);

  if (value) {
    return (
      <div className="modal">
        <div className="modalHead">
          <button type="button" onClick={hideToast}>
            close
          </button>
        </div>
        <div className="modalBody">{props.children}</div>
      </div>
    );
  }
  return null;
});

export default Modal;

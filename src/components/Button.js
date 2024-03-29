import React from 'react';
import { GiSandsOfTime } from 'react-icons/gi';
import '../styles/Components/Button.scss';

function Button({ label, children, classNames = [], ...rest }) {
  const content = label || children;

  return (
    <button type="button" className={`${classNames && classNames.join(' ') + ' '}Button`} {...rest}>
      {content}
    </button>
  );
}

export const ConfirmButton = ({ label = '', Icon = GiSandsOfTime, onConfirm, ...rest }) => {
  const [isConfirm, setIsConfirm] = React.useState(false);

  const onQuestionConfirm = () => {
    setIsConfirm(true);
  };

  const onCancel = () => {
    setIsConfirm(false);
  };

  return (
    <button className="ConfirmButton" {...rest}>
      {isConfirm && (
        <div className="ConfirmButton__Confirmation">
          <span className="ConfirmButton__Confirmation--Cancel" onClick={onCancel}>
            Cancelar
          </span>
          <span className="ConfirmButton__Confirmation--Confirm" onClick={onConfirm}>
            Confirmar
          </span>
        </div>
      )}
      {!isConfirm && (
        <>
          <Icon className="ConfirmButton__Icon" onClick={onQuestionConfirm} />
          <span className="ConfirmButton__Label" onClick={onQuestionConfirm}>
            {label}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;

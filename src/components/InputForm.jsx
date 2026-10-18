import React, { useState } from 'react';
import '@styles/Components/InputForm.scss';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const InputForm = ({
  labelName,
  link,
  isPassword = false,
  type = 'text',
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isAValidError = error && error.trim().length > 0;

  return (
    <label className="InputLabel">
      <div className="label-section">
        <p>{labelName && labelName}</p>
        {link && link}
      </div>
      <div className="InputForm__Container">
        <input
          className="InputForm"
          {...rest}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
        />
        {isPassword && (
          <span onClick={handleShowPassword} className="InputShowPasswordIcon">
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </span>
        )}
      </div>
      {isAValidError && (
        <div className="InputLabel_Error">
          <p className="InputLabel_Error-Description">{error}</p>
        </div>
      )}
    </label>
  );
};

export default InputForm;

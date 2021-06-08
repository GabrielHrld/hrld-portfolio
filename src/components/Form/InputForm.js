import React from 'react';

import '../../styles/components/Form/InputForm.scss';

const InputForm = ({
  type,
  name,
  label,
  placeholder,
  state,
  setState,
  regex,
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validateRegex = () => {
    if (regex) {
      if (regex.test(state.field)) {
        setState({ ...state, valid: true });
      } else {
        setState({ ...state, valid: false });
      }
    }
  };
  return (
    <div className="inputForm-container">
      <label
        htmlFor=""
        className={
          state.valid == null
            ? 'inputForm-label'
            : state.valid
            ? 'inputForm-label valid'
            : 'inputForm-label invalidForm'
        }
      >
        {label}
      </label>
      <input
        type={type}
        className={
          state.valid == null
            ? 'input'
            : state.valid
            ? 'input valid'
            : 'input invalid'
        }
        name={name}
        placeholder={placeholder}
        value={state.field}
        id={name}
        onChange={onChange}
        onKeyUp={validateRegex}
      />
    </div>
  );
};

export default InputForm;

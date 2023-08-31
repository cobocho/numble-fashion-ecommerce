import React from 'react';
import * as Style from './index.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fillWidth: boolean;
  label?: string;
}

const Input = ({ fillWidth, onChange, label, ...rest }: InputProps) => {
  if (label) {
    return (
      <Style.Label fillWidth={fillWidth}>
        {label}
        <Style.Container
          onChange={onChange}
          fillWidth={fillWidth}
          {...rest}
        />
      </Style.Label>
    );
  }

  return (
    <Style.Container
      onChange={onChange}
      fillWidth={fillWidth}
      {...rest}
    />
  );
};

export default Input;

import * as Style from './index.style';

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'full';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
}

const Button = ({ size = 'sm', onClick, ...rest }: ButtonProps) => {
  return (
    <Style.Container
      onClick={onClick}
      size={size}
      {...rest}
    />
  );
};

export default Button;

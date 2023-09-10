import { css } from '@emotion/css';

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'full';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
}

const Button = ({ size = 'sm', onClick, ...rest }: ButtonProps) => {
  const sizeConverter = (size: ButtonSizes) => {
    switch (size) {
      case 'full':
        return '100%';
      case 'sm':
        return '100px';
      case 'md':
        return '300px';
      case 'lg':
        return '500px';
    }
  };

  return (
    <button
      onClick={onClick}
      className={css`
        width: ${sizeConverter(size)};
        height: 50px;
        border-radius: 12px;

        :hover {
          cursor: pointer;
        }
      `}
      {...rest}
    />
  );
};

export default Button;

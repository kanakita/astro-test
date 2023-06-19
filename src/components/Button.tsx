import React from 'react';

interface Props {
  title: string;
  className: string;
}


const Button: React.FC<Props> = ({ title, className }): JSX.Element => {
  const handleClick = () => alert('Button clicked!');
  return (
      <button type="button" className={className} onClick={handleClick}>
        {title}
      </button>
  );
};

export default Button;
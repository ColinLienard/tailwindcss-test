import { FC } from 'react';

type Props = {
  text: string;
  filled?: boolean;
};

const Button: FC<Props> = ({ text, filled }) => (
  <button
    className={`px-6 py-3 rounded-full font-medium text-white ${
      filled ? 'bg-blue-600' : 'border-solid border-[1px] border-white'
    }`}
  >
    {text}
  </button>
);

export default Button;

import { FC } from 'react';

type Props = {
  className: string;
};

const StarIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"
    />
  </svg>
);

export default StarIcon;

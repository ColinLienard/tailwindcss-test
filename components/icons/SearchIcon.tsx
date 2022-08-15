import { FC } from 'react';

type Props = {
  className: string;
};

const SearchIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM15.0006 15.7077C13.4083 17.1332 11.3054 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.3054 17.1332 13.4083 15.7078 15.0006L23.4853 22.7782L22.7782 23.4853L15.0006 15.7077Z"
    />
  </svg>
);

export default SearchIcon;

import { FC } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';

type Props = {
  placeholder: string;
};

const Field: FC<Props> = ({ placeholder }) => (
  <label className="px-6 bg-transparent border-white/50 border-[1px] border-solid rounded-full text-white min-w-[24rem] flex items-center">
    <input
      className=" py-3 bg-transparent outline-none placeholder:text-white/35 w-full"
      type="text"
      placeholder={placeholder}
    />
    <SearchIcon className="fill-current" />
  </label>
);

export default Field;

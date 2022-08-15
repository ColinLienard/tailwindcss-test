import { FC } from 'react';
import Button from './common/Button';
import Field from './common/Field';

const NAV_ITEMS = ['Drops', 'Marketplace', 'Creator', 'Community'];

const Navbar: FC = () => (
  <nav className="flex sticky w-full max-w-7xl py-12 justify-between items-center">
    <ul className="flex gap-8">
      {NAV_ITEMS.map((item) => (
        <li className="hover:text-white transition-colors" key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
    <div className="flex gap-8">
      <Field placeholder="Search" />
      <Button text="Connect Wallet" filled />
    </div>
  </nav>
);

export default Navbar;

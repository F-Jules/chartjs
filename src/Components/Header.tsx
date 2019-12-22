import * as React from 'react';
import { Logo } from './Header/Logo';
import { Headermenu } from './Header/Headermenu';

export const Header: React.SFC<{}> = () => {
  return (
    <header className='header'>
      <Logo />
      <Headermenu />
    </header>
  );
};

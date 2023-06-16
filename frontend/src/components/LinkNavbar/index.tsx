import { ReactNode } from 'react';
import { LinkNav, Items } from './styles';

interface LinkNavbarProps {
  children?: ReactNode;
  to: string,
  title?: string,
  color?: string,
}

export function LinkNavbar({ to, title, color, children }: LinkNavbarProps) {
  return (
    <Items>
      <LinkNav
        to={to}
        style={{
          color: color,
        }}
      >{title}{children}</LinkNav>

    </Items>
  );
}

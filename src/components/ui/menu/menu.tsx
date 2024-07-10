import React from 'react';

type MenuProps = {
  children: React.ReactNode;
};

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {children}
      </ul>
    </nav>
  );
};

export default Menu;

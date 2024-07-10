import React from 'react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  to: string;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-white hover:text-gray-300">
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;

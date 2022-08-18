import React from 'react';
import { Menu } from '@headlessui/react';
import { GrMenu } from 'react-icons/gr';
import DropdownLink from './DropdownLink';
import navItems from '../../utils/navItems';

function DropdownMenu() {
  return (
    <Menu className="dropdownMenuWrapper">
      <Menu.Button className="dropdownButton">
        <GrMenu />
      </Menu.Button>
      <Menu.Items className="dropdownMenu">
        {navItems.map((item, idx) => (
          <Menu.Item key={idx}>
            <DropdownLink className="dropdown-link" href={item.link}>
              {item.name}
            </DropdownLink>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default DropdownMenu;

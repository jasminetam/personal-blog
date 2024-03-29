import Link from 'next/link';
import navItems from '../../utils/navItems';
import { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { RiMenuLine } from 'react-icons/ri';
import DropdownLink from './DropdownLink';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
import Image from 'next/image';

export default function Navigation({ topRef, executeScroll }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', setShow, false);
    };
  }, []);

  return (
    <div className={`navbar ${show && 'navGray'}`}>
      <div className="navFlex">
        <div className={`logoWrapper ${show && 'logoWrapperGray'}`}>
          <Link href="/">
            <Image
              layout="fill"
              objectFit="cover"
              className={`logo ${show && 'logoGray'}`}
              src="/image/logo.png"
              alt=""
            />
          </Link>
        </div>
        {navItems.map((navItem, idx) => (
          <div key={idx} className={`navListItem ${show && 'navListItemGray'}`}>
            <Link href={navItem.link}>{navItem.name}</Link>
          </div>
        ))}

        <div className="navDropdownFlex">
          <Menu as="div" className="dropdownMenuWrapper">
            <Menu.Button
              className={`dropdownButton ${show && 'dropdownButtonGray'}`}
            >
              <RiMenuLine />
            </Menu.Button>
            <Menu.Items className="dropdownMenu">
              {navItems.map((navItem, idx) => (
                <Menu.Item key={idx}>
                  <DropdownLink className="dropdownLink" href={navItem.link}>
                    {navItem.name}
                  </DropdownLink>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        <div className="topIconWrapper">
          <AiOutlineVerticalAlignTop
            className={`topIcon ${show && 'topIconGray'}`}
            onClick={() => executeScroll(topRef)}
            />
            </div>
        </div>
      </div>
    </div>
  );
}

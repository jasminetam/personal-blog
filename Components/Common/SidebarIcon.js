import socialMediaList from '../../utils/socialMediaList';

import Link from 'next/link';

export default function SidebarIcon() {
  return (
    <div className="sidebarIconOnly" data-test="component-sidebarIcon">
      <div className="sidebarIconItem2">
        <div className="sidebarIconSocial">
          {socialMediaList.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <div className="alignIconsOnly">
                <div className="sidebarIconsOnly">{item.icon}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

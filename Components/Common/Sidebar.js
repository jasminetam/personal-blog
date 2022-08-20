import Image from 'next/image';
import Link from 'next/link';
import socialMediaList from '../../utils/socialMediaList';

export default function Sidebar() {
  return (
    <div className="sidebar" data-test="component-sidebar">
      <div className="sidebarItem">
        <h1 className="sidebarTitle">Jasmine Tam</h1>
        <div className="profileImg">
          <Image
            src={'/image/profile.jpg'}
            width={200}
            height={200}
            layout="responsive"
            alt="profile"
          />
        </div>
        <h4>From a Nurse to a React developer</h4>
      </div>
      <div className="sidebarItem2">
        <div className="sidebarSocial">
          {socialMediaList.map((listItem, idx) => (
            <div key={idx}>
              <h4>{listItem.name}</h4>
              <Link href={listItem.link}>
                <div className="alignIcons">
                  {listItem.icon}
                  {listItem.username}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

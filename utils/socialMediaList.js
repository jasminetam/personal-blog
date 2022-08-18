import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';



const socialMediaList = [
  {
    name: 'Github',
    link: 'https://github.com/jasminetam',
    username: '@jasminetam',
    icon: <BsGithub />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ching-man-tam-b89a69129/',
    username: 'Jasmine Tam',
    icon: <BsLinkedin />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/JasmineTam6',
    username: '@JasmineTam6',
    icon: <FiTwitter />,
  },
  {
    name: 'Email',
    link: 'mailto:jasminetam94@gmail.com',
    username: 'jasminetam94',
    icon: <SiGmail />,
  },
];

export default socialMediaList;

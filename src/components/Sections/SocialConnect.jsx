import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';

const SocialBar = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook', url: 'https://www.facebook.com/Mohammadali.Ali11/' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://x.com/aslimdali' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-ali-ansari-977354a0' },
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/ali778866' },
    { icon: <FaYoutube />, label: 'YouTube', url: 'https://www.youtube.com/@mdalimhq' },
  ];

  return (
    <div className="pb-8 justify-center flex space-x-3 z-50">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-x-5 bg-gray-800 rounded-full shadow-md transition-all duration-300
             ease-out overflow-hidden hover:w-48 w-12 h-12`}
        >
          <div className={`flex ml-1.5 justify-center items-center w-12 h-12 text-4xl`}>
            {link.icon}
          </div>
          <span className="text-lg font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;

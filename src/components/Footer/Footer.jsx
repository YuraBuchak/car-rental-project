import scss from './Footer.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.footer_authorWrapper}>
        <p className={scss.footer_text}>Created by Yurii Buchak.</p>
        <ul className={scss.footer_list}>
          <li className={scss.footer_listItem}>
            <a
              target="_blanck"
              rel="nofollow noopener noreferrer"
              href="https://www.linkedin.com/in/yura-buchak"
            >
              <FaLinkedin size={20} color="black" />
            </a>
          </li>
          <li className={scss.footer_listItem}>
            <a
              target="_blanck"
              rel="nofollow noopener noreferrer"
              href="https://github.com/YuraBuchak"
            >
              <FaGithub size={20} color="black" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

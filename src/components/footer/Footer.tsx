import styles from './Footer.module.sass';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BiCoffee } from 'react-icons/bi';
import { RefsI } from '../../App';
import react from '../../assets/img/react.png';
import vite from '../../assets/img/vite.png';
import typescript from '../../assets/img/typescript.png';
import sass from '../../assets/img/sass.png';

const Footer: React.FC<RefsI> = (props: RefsI) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.mainFooter}>
        <div>
          <span>
            <BiCoffee style={{ marginRight: 5 }} /> redoral
          </span>
          <ul>
            <li onClick={() => props.refs.headerRef.current.scrollIntoView()}>back to top</li>
            <li onClick={() => props.refs.aboutRef.current.scrollIntoView()}>about</li>
            <li onClick={() => props.refs.projectsRef.current.scrollIntoView()}>projects</li>
            <li onClick={() => props.refs.contactRef.current.scrollIntoView()}>contact</li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <span className={styles.socialContainer}>
            <a href='https://github.com/redoral' target='_blank'>
              <AiOutlineGithub className={styles.socials} />
            </a>
            <a href='https://linkedin.com/in/redoral' target='_blank'>
              <AiOutlineLinkedin className={styles.socials} />
            </a>
            <a href='mailto:redmunozoral@gmail.com'>
              <AiOutlineMail className={styles.socials} />
            </a>
            <a href='tel:6068543323'>
              <AiOutlinePhone className={styles.socials} />
            </a>
          </span>
          <span className={styles.techLogoContainer}>
            <img src={react} className={styles.techLogo} />
            <img src={vite} className={styles.techLogo} />
            <img src={typescript} className={styles.techLogo} />
            <img src={sass} className={styles.techLogo} />
          </span>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span>
          <p>
            <a href='https://github.com/redoral/sass-portfolio' target='_blank'>
              site repo
            </a>
          </p>
        </span>
        <span>
          <p>© red oral</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

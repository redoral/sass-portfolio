import styles from './Footer.module.sass';
import {
  AiOutlineCoffee,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone
} from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.mainFooter}>
        <div>
          <span>
            <AiOutlineCoffee style={{ marginRight: 5, transform: 'translateY(-2px)' }} /> redoral
          </span>
          <p>Reno, NV</p>
          <p>redmunozoral@gmail.com</p>
          <p>+1(606)854-3323</p>
        </div>
        <div>
          <span className={styles.socialContainer}>
            <AiOutlineGithub className={styles.socials} />
            <AiOutlineLinkedin className={styles.socials} />
            <AiOutlineMail className={styles.socials} />
            <AiOutlinePhone className={styles.socials} />
          </span>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span>
          <p>site repo</p>
        </span>
        <span>
          <p>© red oral</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

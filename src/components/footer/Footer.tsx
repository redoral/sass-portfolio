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

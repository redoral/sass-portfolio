import styles from './Navbar.module.sass';
import { AiFillCaretDown, AiOutlineCoffee } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbarContainer}>
      <span>
        <AiOutlineCoffee style={{ marginRight: 5, transform: 'translateY(-2px)' }} /> redoral
      </span>
      <div className={styles.hamburgerNav}>
        <span>≡</span>
      </div>
      <div className={styles.items}>
        <ul>
          <li>
            <a href='#'>about</a>
          </li>

          <li className={styles.projects}>
            <a href='#'>
              projects{' '}
              <AiFillCaretDown
                style={{
                  fontSize: 12
                }}
              />
            </a>
            <div className={styles.submenu}>
              <div>
                <p>frontend</p>
                <ul>
                  <li>
                    <a
                      href='https://github.com/Perfect-Personnel-Placement/frontend'
                      target='_blank'>
                      perfect personnel placement
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/redoral/w3-bestiary-native' target='_blank'>
                      w3 bestiary native
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://github.com/RevatureRobert/2106Jun07RNCN-2-p2-fe'
                      target='_blank'>
                      chirper native
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/redoral/sass-portfolio' target='_blank'>
                      portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p>backend</p>
                <ul>
                  <li>
                    <a href='https://github.com/redoral/ams-api' target='_blank'>
                      ams api
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/redoral/w3-api-springboot' target='_blank'>
                      w3 api
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://github.com/RevatureRobert/2106Jun07RNCN-2-p2-be'
                      target='_blank'>
                      chirper serverless
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/redoral/reddit-market-bot' target='_blank'>
                      reddit market bot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href='#'>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import styles from './Navbar.module.sass';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiCoffee } from 'react-icons/bi';
import { RefsI } from '../../App';

interface PropsI {
  isOpen: boolean;
  setIsOpen: any;
  refs: RefsI;
}

const Navbar: React.FC<PropsI> = (props: PropsI) => {
  return (
    <nav className={styles.navbarContainer}>
      <span>
        <BiCoffee style={{ marginRight: 5 }} /> redoral
      </span>
      <div className={styles.hamburgerNav}>
        <span
          onClick={(e) => {
            if (props.isOpen) {
              props.setIsOpen(false);
            } else {
              props.setIsOpen(true);
            }
            e.stopPropagation();
          }}>
          ≡
        </span>
      </div>
      <div className={styles.items}>
        <ul>
          <li>
            <a onClick={() => props.refs.refs.aboutRef.current.scrollIntoView()}>about</a>
          </li>

          <li className={styles.projects}>
            <a onClick={() => props.refs.refs.projectsRef.current.scrollIntoView()}>
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
            <a onClick={() => props.refs.refs.contactRef.current.scrollIntoView()}>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

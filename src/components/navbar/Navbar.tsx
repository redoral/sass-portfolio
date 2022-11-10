import styles from './Navbar.module.sass';
import { AiFillCaretDown, AiOutlineCoffee } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <span>
        <AiOutlineCoffee style={{ marginRight: 5, transform: 'translateY(-2px)' }} /> redoral
      </span>
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
                    <a href='#'>perfect personnel placement</a>
                  </li>
                  <li>
                    <a href='#'>chirper native</a>
                  </li>
                  <li>
                    <a href='#'>w3 bestiary native</a>
                  </li>
                </ul>
              </div>
              <div>
                <p>backend</p>
                <ul>
                  <li>
                    <a href='#'>perfect personnel placement</a>
                  </li>
                  <li>
                    <a href='#'>chirper native</a>
                  </li>
                  <li>
                    <a href='#'>w3 bestiary native</a>
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

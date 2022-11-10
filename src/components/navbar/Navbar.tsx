import styles from './Navbar.module.sass';
import { AiFillCaretDown, AiOutlineCoffee } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>
        <AiOutlineCoffee style={{ marginRight: 5 }} /> redoral
      </span>
      <div className={styles.items}>
        <ul>
          <li>
            <a href='#'>about</a>
            <a href='#' className={styles.projects}>
              projects{' '}
              <AiFillCaretDown
                style={{
                  fontSize: 12
                }}
              />
              <div className={styles.submenu}>
                <div>
                  <p>frontend</p>
                  <ul>
                    <li>perfect personnel placement</li>
                    <li>chirper native</li>
                    <li>w3 bestiary native</li>
                  </ul>
                </div>
                <div>
                  <p>backend</p>
                  <ul>
                    <li>account management system</li>
                    <li>chirper serverless</li>
                    <li>w3 bestiary</li>
                  </ul>
                </div>
              </div>
            </a>

            <a href='#'>contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

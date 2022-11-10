import Navbar from '../navbar/Navbar';
import styles from './Header.module.sass';
import { GoChevronDown } from 'react-icons/go';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>
          full stack
          <br />
          software engineer
        </h1>

        <button className={styles.button}>
          learn more <GoChevronDown style={{ transform: 'translateY(2px)' }} />
        </button>
      </div>
    </header>
  );
};

export default Header;

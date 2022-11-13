import Navbar from '../navbar/Navbar';
import styles from './Header.module.sass';
import { GoChevronDown } from 'react-icons/go';
import { useState } from 'react';
import Hamburger from '../hamburger/Hamburger';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer} onClick={() => (isOpen ? setIsOpen(false) : null)}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
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

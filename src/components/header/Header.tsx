import { GoChevronDown } from 'react-icons/go';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.sass';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

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
        <span>
          <a href='https://www.github.com/redoral'>
            <AiOutlineGithub />
          </a>{' '}
          <a href='https://www.linkedin.com/in/redoral'>
            <AiOutlineLinkedin />
          </a>
        </span>
        <button className={styles.button}>
          learn more <GoChevronDown style={{ transform: 'translateY(2px)' }} />
        </button>
      </div>
    </header>
  );
};

export default Header;

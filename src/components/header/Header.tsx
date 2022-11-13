import { GoChevronDown } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import TextTransition, { presets } from 'react-text-transition';
import Navbar from '../navbar/Navbar';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.sass';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const title: string[] = ['frontend', 'backend', 'full stack'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 2) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <header className={styles.headerContainer} onClick={() => (isOpen ? setIsOpen(false) : null)}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.content}>
        <h1>
          <TextTransition springConfig={presets.wobbly} className={styles.dynamicTitle}>
            {title[index]}
          </TextTransition>
          software engineer
        </h1>
        <span>
          <a href='https://www.github.com/redoral' target='_blank'>
            <AiOutlineGithub />
          </a>{' '}
          <a href='https://www.linkedin.com/in/redoral' target='_blank'>
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

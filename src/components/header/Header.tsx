import { GoChevronDown } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import TextTransition, { presets } from 'react-text-transition';
import Navbar from '../navbar/Navbar';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.sass';
import { RefsI } from '../../App';

const Header: React.FC<RefsI> = (props: RefsI) => {
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
    <header
      className={styles.headerContainer}
      onClick={() => (isOpen ? setIsOpen(false) : null)}
      ref={props.refs.headerRef}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} refs={{ refs: props.refs }} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} refs={{ refs: props.refs }} />
      <div className={styles.content}>
        <h1>
          <TextTransition springConfig={presets.wobbly} className={styles.dynamicText}>
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
        <button
          className={styles.button}
          onClick={() => props.refs.aboutRef.current.scrollIntoView()}>
          learn more <GoChevronDown style={{ transform: 'translateY(2px)' }} />
        </button>
      </div>
    </header>
  );
};

export default Header;

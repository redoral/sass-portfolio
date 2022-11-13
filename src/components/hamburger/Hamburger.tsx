import styles from './Hamburger.module.sass';

interface PropsI {
  isOpen: boolean;
  setIsOpen: any;
}

const Hamburger: React.FC<PropsI> = (props: PropsI) => {
  if (props.isOpen) {
    return (
      <div className={styles.hamburgerContainer}>
        <ul>
          <li>
            <a href='#'>about</a>
          </li>
          <li>
            <a href='#'>projects</a>
          </li>
          <li>
            <a href='#'>contact</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Hamburger;

import styles from './Hamburger.module.sass';
import { RefsI } from '../../App';

interface PropsI {
  isOpen: boolean;
  setIsOpen: any;
  refs: RefsI;
}

const Hamburger: React.FC<PropsI> = (props: PropsI) => {
  if (props.isOpen) {
    return (
      <div className={styles.hamburgerContainer}>
        <ul>
          <li>
            <a
              onClick={() => {
                props.refs.refs.aboutRef.current.scrollIntoView();
                props.setIsOpen(false);
              }}>
              about
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.refs.refs.projectsRef.current.scrollIntoView();
                props.setIsOpen(false);
              }}>
              projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.refs.refs.contactRef.current.scrollIntoView();
                props.setIsOpen(false);
              }}>
              contact
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Hamburger;

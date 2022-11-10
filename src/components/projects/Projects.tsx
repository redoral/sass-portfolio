import styles from './Projects.module.sass';
import chirper from '../../assets/projects/chirper.jpg';
import p3 from '../../assets/projects/p3.jpg';
import w3 from '../../assets/projects/w3.jpg';

const Projects: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>some of my work</h2>
      <p>
        check out more on my{' '}
        <a href='https://github.com/redoral?tab=repositories' target='_blank'>
          github
        </a>
      </p>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <img src={chirper} />
          <h4>chirper</h4>
          <a href='#'>repo</a>
        </div>
        <div className={styles.projectCard}>
          <img src={p3} />
          <h4>perfect personnel placement</h4>
          <a href='#'>repo</a>
        </div>
        <div className={styles.projectCard}>
          <img src={w3} />
          <h4>witcher 3 bestiary</h4>
          <a href='#'>repo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

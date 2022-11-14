import styles from './Projects.module.sass';
import chirper from '../../assets/projects/chirper.jpg';
import p3 from '../../assets/projects/p3.jpg';
import aws from '../../assets/projects/aws.jpg';
import { RefsI } from '../../App';

const Projects: React.FC<RefsI> = (props: RefsI) => {
  return (
    <section className={styles.projectsContainer} ref={props.refs.projectsRef}>
      <h2>projects</h2>
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
          <a href='https://github.com/RevatureRobert/2106Jun07RNCN-2-p2-fe' target='_blank'>
            repo
          </a>
        </div>
        <div className={styles.projectCard}>
          <img src={p3} />
          <h4>perfect personnel placement</h4>
          <a href='https://github.com/Perfect-Personnel-Placement/frontend' target='_blank'>
            repo
          </a>
        </div>
        <div className={styles.projectCard}>
          <img src={aws} />
          <h4>chirper serverless</h4>
          <a href='https://github.com/RevatureRobert/2106Jun07RNCN-2-p2-be' target='_blank'>
            repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import styles from './About.module.sass';
import { AiOutlineFilePdf } from 'react-icons/ai';

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>about me</h2>
      <p>
        My name's Red. I am a Full Stack Software Engineer. From web and mobile apps to RESTful APIs
        and serverless backends, I am experienced with a magnitude of development languages, tools,
        and processes! And I love what I do. ❤️
      </p>
      <button className={styles.buttonDark}>
        download resume{' '}
        <AiOutlineFilePdf
          style={{
            transform: 'translateY(2px)'
          }}
        />
      </button>
    </section>
  );
};

export default About;

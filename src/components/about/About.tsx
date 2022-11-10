import styles from './About.module.sass';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useState } from 'react';

const About: React.FC = () => {
  const [display, setDisplay] = useState('none');

  const toggleCollapse = () => {
    if (display === 'none') {
      setDisplay('flex');
    } else if (display === 'flex') {
      setDisplay('none');
    }
  };

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

      <span className={styles.expandButton} onClick={() => toggleCollapse()}>
        {display === 'none' ? (
          <span>
            more <GoChevronDown style={{ transform: 'translateY(2px)' }} />
          </span>
        ) : (
          <span>
            collapse <GoChevronUp style={{ transform: 'translateY(2px)' }} />
          </span>
        )}
      </span>
      <div className={styles.skills} style={{ display: display }}>
        <div>
          <h3>frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h3>backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>PostgreSQL</li>
            <li>AWS Serverless</li>
          </ul>
        </div>
        <div>
          <h3>other</h3>
          <ul>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>JUnit</li>
            <li>Git</li>
            <li>Docker</li>
            <li>VSCode</li>
            <li>Agile</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

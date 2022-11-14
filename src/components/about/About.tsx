import styles from './About.module.sass';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useState } from 'react';
import resume from '../../assets/files/resume.pdf';
import { RefsI } from '../../App';

const About: React.FC<RefsI> = (props: RefsI) => {
  const [display, setDisplay] = useState('none');

  const toggleCollapse = () => {
    if (display === 'none') {
      setDisplay('flex');
    } else if (display === 'flex') {
      setDisplay('none');
    }
  };

  return (
    <section className={styles.aboutContainer} ref={props.refs.aboutRef}>
      <h2>about me</h2>
      <p>
        My name's Red. I am a Full Stack Software Engineer. From web and mobile apps to RESTful APIs
        and serverless backends, I am experienced in a magnitude of development languages, tools,
        and processes! And I love what I do. ❤️
      </p>
      <a href={resume} target='_blank'>
        <button className={`${styles.button} ${styles.buttonDark}`}>
          download resume{' '}
          <AiOutlineFilePdf
            style={{
              transform: 'translateY(2px)'
            }}
          />
        </button>
      </a>
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
            <li>html</li>
            <li>css</li>
            <li>sass</li>
            <li>bootstrap</li>
            <li>javascript</li>
            <li>typescript</li>
            <li>react</li>
            <li>react native</li>
            <li>redux</li>
          </ul>
        </div>
        <div>
          <h3>backend</h3>
          <ul>
            <li>node.js</li>
            <li>express.js</li>
            <li>java</li>
            <li>spring boot</li>
            <li>php</li>
            <li>mysql</li>
            <li>nosql</li>
            <li>postgresql</li>
            <li>aws serverless</li>
          </ul>
        </div>
        <div>
          <h3>other</h3>
          <ul>
            <li>jest</li>
            <li>enzyme</li>
            <li>junit</li>
            <li>git</li>
            <li>docker</li>
            <li>postman</li>
            <li>vscode</li>
            <li>agile</li>
            <li>scrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

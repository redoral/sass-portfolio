import styles from './Contact.module.sass';
import {
  AiOutlineSend,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMessage
} from 'react-icons/ai';
import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
import { useRef, MutableRefObject, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import spinner from '../../assets/img/spinner.gif';
import { RefsI } from '../../App';

const Contact: React.FC<RefsI> = (props: RefsI) => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('default');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setResponse('loading');

    if (email.includes('@') && name.length > 2 && message) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setResponse(result.text);
          },
          (error) => {
            setResponse('error: ' + error.toLowerCase());
          }
        );
    }
  };

  const dynamicButton = () => {
    if (response === 'loading') {
      return <img src={spinner} width='50px' />;
    } else if (response === 'OK') {
      return <FcCheckmark className={styles.buttonIcon} size={32} />;
    } else if (response.startsWith('error')) {
      return (
        <>
          <FcHighPriority className={styles.buttonIcon} size={32} />
          <p>{response}</p>
        </>
      );
    } else {
      return (
        <label htmlFor='submit' className={`${styles.button} ${styles.buttonDark}`}>
          send{' '}
          <AiOutlineSend
            style={{
              transform: 'translateY(2px)'
            }}
          />
        </label>
      );
    }
  };

  return (
    <section className={styles.contactContainer} ref={props.refs.contactRef}>
      <div className={styles.personalImg}></div>
      <div className={styles.form}>
        <h2>let's chat!</h2>
        <span className={styles.contactInfo}>
          <p>
            <AiOutlineMail className={styles.contactIcon} />{' '}
            <a href='mailto:redmunozoral@gmail.com'>redmunozoral@gmail.com</a>
          </p>
          <p>
            <AiOutlinePhone className={styles.contactIcon} />{' '}
            <a href='tel:6068543323'>+1(606)854-3323</a>
          </p>
        </span>
        <form ref={formRef} onSubmit={sendEmail}>
          <label htmlFor='email'>email</label>
          <span>
            <AiOutlineMail className={styles.formIcon} />
            <input
              type='email'
              id='email'
              name='user_email'
              required
              autoComplete='off'
              onChange={(e: any) => {
                setEmail(e.target.value);
                setResponse('');
              }}
            />
            {email.includes('@') ? (
              <AiOutlineCheckCircle className={styles.formIcon} style={{ color: '#77CC77' }} />
            ) : (
              <AiOutlineExclamationCircle
                className={styles.formIcon}
                style={{ color: '#FF6961' }}
              />
            )}
          </span>
          <label htmlFor='name'>name</label>
          <span>
            <AiOutlineUser className={styles.formIcon} />
            <input
              type='text'
              id='name'
              name='user_name'
              autoComplete='off'
              minLength={2}
              required
              onChange={(e: any) => {
                setName(e.target.value);
                setResponse('');
              }}
            />
            {name.length > 1 ? (
              <AiOutlineCheckCircle className={styles.formIcon} style={{ color: '#77CC77' }} />
            ) : (
              <AiOutlineExclamationCircle
                className={styles.formIcon}
                style={{ color: '#FF6961' }}
              />
            )}
          </span>
          <label htmlFor='name'>message</label>
          <span>
            <AiOutlineMessage className={styles.formIcon} />
            <textarea
              id='message'
              name='message'
              required
              onChange={(e: any) => {
                setMessage(e.target.value);
                setResponse('');
              }}
            />
            {message ? (
              <AiOutlineCheckCircle className={styles.formIcon} style={{ color: '#77CC77' }} />
            ) : (
              <AiOutlineExclamationCircle
                className={styles.formIcon}
                style={{ color: '#FF6961' }}
              />
            )}
          </span>
          {dynamicButton()}
          <input type='submit' id='submit' style={{ visibility: 'hidden' }}></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;

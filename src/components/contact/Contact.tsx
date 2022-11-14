import styles from './Contact.module.sass';
import {
  AiOutlineSend,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMessage
} from 'react-icons/ai';
import { useRef, MutableRefObject, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (email.includes('@') && name.length > 2 && message) {
      setResponse('loading');

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
            setResponse(error.text);
          }
        );
    }
  };

  return (
    <section className={styles.contactContainer}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196868.24580219598!2d-119.9909243034391!3d39.55811167610205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940ae9292a09d%3A0x40c5c5ce7438f787!2sReno%2C%20NV!5e0!3m2!1sen!2sus!4v1668114398416!5m2!1sen!2sus'
        className={styles.map}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
      <div className={styles.form}>
        <h2>contact me</h2>
        <span className={styles.contactInfo}>
          <p>
            <a href='mailto:redmunozoral@gmail.com'>redmunozoral@gmail.com</a>
          </p>
          <p>
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
              onChange={(e: any) => setEmail(e.target.value)}
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
              onChange={(e: any) => setName(e.target.value)}
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
              onChange={(e: any) => setMessage(e.target.value)}
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
          <label htmlFor='submit' className={`${styles.button} ${styles.buttonDark}`}>
            send{' '}
            <AiOutlineSend
              style={{
                transform: 'translateY(2px)'
              }}
            />
          </label>
          <input type='submit' id='submit' style={{ visibility: 'hidden' }}></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;

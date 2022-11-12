import styles from './Contact.module.sass';
import { AiOutlineSend } from 'react-icons/ai';

const Contact: React.FC = () => {
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
        <form>
          <label htmlFor='email'>email</label>
          <input type='text' id='email' />
          <label htmlFor='subject'>subject</label>
          <input type='text' id='subject' />
          <label htmlFor='name'>message</label>
          <textarea id='message' />
          <label htmlFor='submit' className={styles.buttonDark}>
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

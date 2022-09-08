/* eslint-disable react/jsx-filename-extension */
import { RiSendPlane2Line } from 'react-icons/ri';
import styles from './InputNewContact.module.css';

type IProps = {
  setContact: any,
  contact: string
}

export default function InputNewContact({ setContact, contact }: IProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input__newContact}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Coloque aqui o link de contato"
      />
      <RiSendPlane2Line className={styles.buttom__addNewContact} />
    </div>
  );
}

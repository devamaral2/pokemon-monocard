/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { RiSendPlane2Line } from 'react-icons/ri';
import styles from './InputNewContact.module.css';

type IProps = {
  setContact: (cont: string) => void,
  contact: string,
  addContact(): void
}

export default function InputNewContact({ setContact, contact, addContact }: IProps) {
  return (
    <div className={styles.container}>
      <input
        data-cy="newContact-input"
        className={styles.input__newContact}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Coloque aqui o link de contato"
      />
      <RiSendPlane2Line
        data-cy="newContact-add-btn"
        className={styles.buttom__addNewContact}
        onClick={addContact}
      />
    </div>
  );
}

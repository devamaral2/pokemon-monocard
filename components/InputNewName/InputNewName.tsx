/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { RiSendPlane2Line } from 'react-icons/ri';
import styles from './InputNewName.module.css';

type IProps = {
  name: string,
  setName: (nam: string) => void,
  changeName(): void,
}

export default function InputNewName({ name, setName, changeName }: IProps) {
  return (
    <div className={styles.container}>
      <input
        data-cy="newName-input"
        className={styles.input__newName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escolha outro nome para o pokemon"
      />
      <RiSendPlane2Line
        data-cy="confirmNewName-btn"
        className={styles.buttom__addNewName}
        onClick={changeName}
      />
    </div>
  );
}

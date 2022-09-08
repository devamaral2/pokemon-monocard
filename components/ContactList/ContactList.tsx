/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import Link from 'next/link';
import {
  BsLinkedin, BsWhatsapp, BsInstagram, BsTwitter, BsLink45Deg,
} from 'react-icons/bs';
import styles from './ContactList.module.css';

function Icon({ contact }: { contact: string }) {
  if (contact.includes('whatsapp')) {
    return <BsWhatsapp className={styles.contact__icon} />;
  }
  if (contact.includes('instagram')) {
    return <BsInstagram className={styles.contact__icon} />;
  }
  if (contact.includes('linkedin')) {
    return <BsLinkedin className={styles.contact__icon} />;
  }
  if (contact.includes('twitter')) {
    return <BsTwitter className={styles.contact__icon} />;
  }
  return <BsLink45Deg className={styles.contact__icon} />;
}

export default function ContactList({ contact }: { contact: string }) {
  return (
    <Link href={contact}>
      <a className={styles.container}>
        <Icon contact={contact} />
        <span className={styles.text__link}>
          {contact}
        </span>
      </a>
    </Link>
  );
}

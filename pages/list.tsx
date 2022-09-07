import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

/* eslint-disable react/jsx-filename-extension */
export default function List() {
  const router = useRouter();
  return (
    <div className="container">
      <Header pathname={router.pathname} />
    </div>
  );
}

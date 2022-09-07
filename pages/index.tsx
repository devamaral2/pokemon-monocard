import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Pokeball from '../components/Pokeball/Pokeball';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <Header pathname={router.pathname} />
      <Pokeball />
    </div>
  );
}

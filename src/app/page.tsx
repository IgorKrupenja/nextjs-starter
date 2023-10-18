import Image from 'next/image';
import { ReactElement } from 'react';

import styles from './root.module.scss';

export default function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
    </main>
  );
}

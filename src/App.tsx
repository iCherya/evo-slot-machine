import React, { useCallback, useState } from 'react';

import logo from './logo.svg';

import styles from './App.module.scss';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>Perform project setup</p>
        <p>
          <button type="button" onClick={onClickHandler}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export const sum = (a: number, b: number): number => a + b;

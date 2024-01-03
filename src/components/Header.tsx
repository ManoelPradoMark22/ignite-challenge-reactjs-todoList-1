import styles from './Header.module.css'

import todoLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={todoLogo} alt="logo" />
        <p>todo</p>
      </div>
    </header>
  )
}